import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDiscoveryV2VenuesIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare enum GetDiscoveryV2VenuesIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}
export declare enum GetDiscoveryV2VenuesIncludeTestEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
export declare enum GetDiscoveryV2VenuesSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}
export declare enum GetDiscoveryV2VenuesUnitEnum {
    Miles = "miles",
    Km = "km"
}
export declare class GetDiscoveryV2VenuesQueryParams extends SpeakeasyBase {
    countryCode?: string;
    geoPoint?: string;
    id?: string;
    includeLicensedContent?: GetDiscoveryV2VenuesIncludeLicensedContentEnum;
    includeSpellcheck?: GetDiscoveryV2VenuesIncludeSpellcheckEnum;
    includeTest?: GetDiscoveryV2VenuesIncludeTestEnum;
    keyword?: string;
    latlong?: string;
    locale?: string;
    page?: string;
    radius?: string;
    size?: string;
    sort?: string;
    source?: GetDiscoveryV2VenuesSourceEnum;
    stateCode?: string;
    unit?: GetDiscoveryV2VenuesUnitEnum;
}
export declare class GetDiscoveryV2VenuesRequest extends SpeakeasyBase {
    queryParams: GetDiscoveryV2VenuesQueryParams;
}
export declare class GetDiscoveryV2VenuesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
