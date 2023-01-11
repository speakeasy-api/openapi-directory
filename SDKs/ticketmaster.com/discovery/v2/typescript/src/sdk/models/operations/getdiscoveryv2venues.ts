import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDiscoveryV2VenuesIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}

export enum GetDiscoveryV2VenuesIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}

export enum GetDiscoveryV2VenuesIncludeTestEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}

export enum GetDiscoveryV2VenuesSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}

export enum GetDiscoveryV2VenuesUnitEnum {
    Miles = "miles",
    Km = "km"
}


export class GetDiscoveryV2VenuesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geoPoint" })
  geoPoint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: GetDiscoveryV2VenuesIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeSpellcheck" })
  includeSpellcheck?: GetDiscoveryV2VenuesIncludeSpellcheckEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTest" })
  includeTest?: GetDiscoveryV2VenuesIncludeTestEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latlong" })
  latlong?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: GetDiscoveryV2VenuesSourceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stateCode" })
  stateCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: GetDiscoveryV2VenuesUnitEnum;
}


export class GetDiscoveryV2VenuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDiscoveryV2VenuesQueryParams;
}


export class GetDiscoveryV2VenuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
