import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDiscoveryV2VenuesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetDiscoveryV2VenuesIdIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare class GetDiscoveryV2VenuesIdQueryParams extends SpeakeasyBase {
    includeLicensedContent?: GetDiscoveryV2VenuesIdIncludeLicensedContentEnum;
    locale?: string;
}
export declare class GetDiscoveryV2VenuesIdRequest extends SpeakeasyBase {
    pathParams: GetDiscoveryV2VenuesIdPathParams;
    queryParams: GetDiscoveryV2VenuesIdQueryParams;
}
export declare class GetDiscoveryV2VenuesIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
