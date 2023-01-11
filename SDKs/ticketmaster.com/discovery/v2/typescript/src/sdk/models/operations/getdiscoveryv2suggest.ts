import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDiscoveryV2SuggestIncludeFuzzyEnum {
    Yes = "yes",
    No = " no"
}

export enum GetDiscoveryV2SuggestIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}

export enum GetDiscoveryV2SuggestIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}

export enum GetDiscoveryV2SuggestIncludeTbaEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}

export enum GetDiscoveryV2SuggestIncludeTbdEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}

export enum GetDiscoveryV2SuggestSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}

export enum GetDiscoveryV2SuggestUnitEnum {
    Miles = "miles",
    Km = "km"
}


export class GetDiscoveryV2SuggestQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientVisibility" })
  clientVisibility?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geoPoint" })
  geoPoint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeFuzzy" })
  includeFuzzy?: GetDiscoveryV2SuggestIncludeFuzzyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: GetDiscoveryV2SuggestIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeSpellcheck" })
  includeSpellcheck?: GetDiscoveryV2SuggestIncludeSpellcheckEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTBA" })
  includeTBA?: GetDiscoveryV2SuggestIncludeTbaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTBD" })
  includeTBD?: GetDiscoveryV2SuggestIncludeTbdEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latlong" })
  latlong?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segmentId" })
  segmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: GetDiscoveryV2SuggestSourceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: GetDiscoveryV2SuggestUnitEnum;
}


export class GetDiscoveryV2SuggestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDiscoveryV2SuggestQueryParams;
}


export class GetDiscoveryV2SuggestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDiscoveryV2Suggest200ApplicationHalPlusJsonString?: string;

  @SpeakeasyMetadata()
  getDiscoveryV2Suggest200ApplicationJSONString?: string;
}
