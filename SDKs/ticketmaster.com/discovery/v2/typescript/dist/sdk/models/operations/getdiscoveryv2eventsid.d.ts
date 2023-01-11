import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDiscoveryV2EventsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetDiscoveryV2EventsIdIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare class GetDiscoveryV2EventsIdQueryParams extends SpeakeasyBase {
    includeLicensedContent?: GetDiscoveryV2EventsIdIncludeLicensedContentEnum;
    locale?: string;
}
export declare class GetDiscoveryV2EventsIdRequest extends SpeakeasyBase {
    pathParams: GetDiscoveryV2EventsIdPathParams;
    queryParams: GetDiscoveryV2EventsIdQueryParams;
}
export declare class GetDiscoveryV2EventsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
