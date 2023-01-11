import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDiscoveryV2SuggestIncludeFuzzyEnum {
    Yes = "yes",
    No = " no"
}
export declare enum GetDiscoveryV2SuggestIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare enum GetDiscoveryV2SuggestIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}
export declare enum GetDiscoveryV2SuggestIncludeTbaEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
export declare enum GetDiscoveryV2SuggestIncludeTbdEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
export declare enum GetDiscoveryV2SuggestSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}
export declare enum GetDiscoveryV2SuggestUnitEnum {
    Miles = "miles",
    Km = "km"
}
export declare class GetDiscoveryV2SuggestQueryParams extends SpeakeasyBase {
    clientVisibility?: string;
    countryCode?: string;
    geoPoint?: string;
    includeFuzzy?: GetDiscoveryV2SuggestIncludeFuzzyEnum;
    includeLicensedContent?: GetDiscoveryV2SuggestIncludeLicensedContentEnum;
    includeSpellcheck?: GetDiscoveryV2SuggestIncludeSpellcheckEnum;
    includeTBA?: GetDiscoveryV2SuggestIncludeTbaEnum;
    includeTBD?: GetDiscoveryV2SuggestIncludeTbdEnum;
    keyword?: string;
    latlong?: string;
    locale?: string;
    radius?: string;
    segmentId?: string;
    size?: string;
    source?: GetDiscoveryV2SuggestSourceEnum;
    unit?: GetDiscoveryV2SuggestUnitEnum;
}
export declare class GetDiscoveryV2SuggestRequest extends SpeakeasyBase {
    queryParams: GetDiscoveryV2SuggestQueryParams;
}
export declare class GetDiscoveryV2SuggestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDiscoveryV2Suggest200ApplicationHalPlusJsonString?: string;
    getDiscoveryV2Suggest200ApplicationJSONString?: string;
}
