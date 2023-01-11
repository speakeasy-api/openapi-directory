import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDiscoveryV2ClassificationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetDiscoveryV2ClassificationsIdIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare class GetDiscoveryV2ClassificationsIdQueryParams extends SpeakeasyBase {
    includeLicensedContent?: GetDiscoveryV2ClassificationsIdIncludeLicensedContentEnum;
    locale?: string;
}
export declare class GetDiscoveryV2ClassificationsIdRequest extends SpeakeasyBase {
    pathParams: GetDiscoveryV2ClassificationsIdPathParams;
    queryParams: GetDiscoveryV2ClassificationsIdQueryParams;
}
export declare class GetDiscoveryV2ClassificationsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
