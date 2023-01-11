import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDiscoveryV2EventsIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}

export enum GetDiscoveryV2EventsIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}

export enum GetDiscoveryV2EventsIncludeTbaEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}

export enum GetDiscoveryV2EventsIncludeTbdEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}

export enum GetDiscoveryV2EventsIncludeTestEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}

export enum GetDiscoveryV2EventsSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}

export enum GetDiscoveryV2EventsUnitEnum {
    Miles = "miles",
    Km = "km"
}


export class GetDiscoveryV2EventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=attractionId" })
  attractionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classificationId" })
  classificationId?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classificationName" })
  classificationName?: any[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientVisibility" })
  clientVisibility?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dmaId" })
  dmaId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDateTime" })
  endDateTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geoPoint" })
  geoPoint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: GetDiscoveryV2EventsIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeSpellcheck" })
  includeSpellcheck?: GetDiscoveryV2EventsIncludeSpellcheckEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTBA" })
  includeTBA?: GetDiscoveryV2EventsIncludeTbaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTBD" })
  includeTBD?: GetDiscoveryV2EventsIncludeTbdEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTest" })
  includeTest?: GetDiscoveryV2EventsIncludeTestEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latlong" })
  latlong?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketId" })
  marketId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onsaleEndDateTime" })
  onsaleEndDateTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onsaleOnAfterStartDate" })
  onsaleOnAfterStartDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onsaleOnStartDate" })
  onsaleOnStartDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onsaleStartDateTime" })
  onsaleStartDateTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=promoterId" })
  promoterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segmentId" })
  segmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segmentName" })
  segmentName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: GetDiscoveryV2EventsSourceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDateTime" })
  startDateTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stateCode" })
  stateCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: GetDiscoveryV2EventsUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=venueId" })
  venueId?: string;
}


export class GetDiscoveryV2EventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDiscoveryV2EventsQueryParams;
}


export class GetDiscoveryV2EventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
