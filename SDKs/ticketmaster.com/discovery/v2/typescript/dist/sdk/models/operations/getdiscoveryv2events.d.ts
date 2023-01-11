import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDiscoveryV2EventsIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare enum GetDiscoveryV2EventsIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}
export declare enum GetDiscoveryV2EventsIncludeTbaEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
export declare enum GetDiscoveryV2EventsIncludeTbdEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
export declare enum GetDiscoveryV2EventsIncludeTestEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
export declare enum GetDiscoveryV2EventsSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}
export declare enum GetDiscoveryV2EventsUnitEnum {
    Miles = "miles",
    Km = "km"
}
export declare class GetDiscoveryV2EventsQueryParams extends SpeakeasyBase {
    attractionId?: string;
    city?: string;
    classificationId?: any[];
    classificationName?: any[];
    clientVisibility?: string;
    countryCode?: string;
    dmaId?: string;
    endDateTime?: string;
    geoPoint?: string;
    id?: string;
    includeLicensedContent?: GetDiscoveryV2EventsIncludeLicensedContentEnum;
    includeSpellcheck?: GetDiscoveryV2EventsIncludeSpellcheckEnum;
    includeTBA?: GetDiscoveryV2EventsIncludeTbaEnum;
    includeTBD?: GetDiscoveryV2EventsIncludeTbdEnum;
    includeTest?: GetDiscoveryV2EventsIncludeTestEnum;
    keyword?: string;
    latlong?: string;
    locale?: string;
    marketId?: string;
    onsaleEndDateTime?: string;
    onsaleOnAfterStartDate?: string;
    onsaleOnStartDate?: string;
    onsaleStartDateTime?: string;
    page?: string;
    postalCode?: string;
    promoterId?: string;
    radius?: string;
    segmentId?: string;
    segmentName?: string;
    size?: string;
    sort?: string;
    source?: GetDiscoveryV2EventsSourceEnum;
    startDateTime?: string;
    stateCode?: string;
    unit?: GetDiscoveryV2EventsUnitEnum;
    venueId?: string;
}
export declare class GetDiscoveryV2EventsRequest extends SpeakeasyBase {
    queryParams: GetDiscoveryV2EventsQueryParams;
}
export declare class GetDiscoveryV2EventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
