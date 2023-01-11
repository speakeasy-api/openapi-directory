import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCountriesOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}

export enum GetCountriesSortEnum {
    Key = "key",
    Label = "label"
}


export class GetCountriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketId" })
  marketId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetCountriesOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionTypeId" })
  regionTypeId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCountriesSortEnum;
}


export class GetCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCountriesQueryParams;
}


export class GetCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arrayOfCountrySummary?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  errorLimit?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
