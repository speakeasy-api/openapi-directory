import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare class GetQueryParams extends SpeakeasyBase {
    includeLicensedContent?: GetIncludeLicensedContentEnum;
    locale?: string;
}
export declare class GetRequest extends SpeakeasyBase {
    pathParams: GetPathParams;
    queryParams: GetQueryParams;
}
export declare class GetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
