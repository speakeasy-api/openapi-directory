import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSubgenrePathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetSubgenreIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare class GetSubgenreQueryParams extends SpeakeasyBase {
    includeLicensedContent?: GetSubgenreIncludeLicensedContentEnum;
    locale?: string;
}
export declare class GetSubgenreRequest extends SpeakeasyBase {
    pathParams: GetSubgenrePathParams;
    queryParams: GetSubgenreQueryParams;
}
export declare class GetSubgenreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
