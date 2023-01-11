import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCountryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryKey" })
  countryKey: string;
}

export enum GetCountryOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}

export enum GetCountrySortEnum {
    Key = "key",
    Label = "label"
}


export class GetCountryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketId" })
  marketId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetCountryOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCountrySortEnum;
}


export class GetCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCountryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCountryQueryParams;
}


export class GetCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arrayOfCountry?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  errorLimit?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
