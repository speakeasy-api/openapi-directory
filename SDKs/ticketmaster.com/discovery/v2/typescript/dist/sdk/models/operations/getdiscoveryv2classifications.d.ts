import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDiscoveryV2ClassificationsIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare enum GetDiscoveryV2ClassificationsIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}
export declare enum GetDiscoveryV2ClassificationsIncludeTestEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
export declare enum GetDiscoveryV2ClassificationsSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}
export declare class GetDiscoveryV2ClassificationsQueryParams extends SpeakeasyBase {
    id?: string;
    includeLicensedContent?: GetDiscoveryV2ClassificationsIncludeLicensedContentEnum;
    includeSpellcheck?: GetDiscoveryV2ClassificationsIncludeSpellcheckEnum;
    includeTest?: GetDiscoveryV2ClassificationsIncludeTestEnum;
    keyword?: string;
    locale?: string;
    page?: string;
    size?: string;
    sort?: string;
    source?: GetDiscoveryV2ClassificationsSourceEnum;
}
export declare class GetDiscoveryV2ClassificationsRequest extends SpeakeasyBase {
    queryParams: GetDiscoveryV2ClassificationsQueryParams;
}
export declare class GetDiscoveryV2ClassificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
