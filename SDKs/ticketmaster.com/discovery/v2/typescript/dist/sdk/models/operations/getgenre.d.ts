import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetGenrePathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetGenreIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare class GetGenreQueryParams extends SpeakeasyBase {
    includeLicensedContent?: GetGenreIncludeLicensedContentEnum;
    locale?: string;
}
export declare class GetGenreRequest extends SpeakeasyBase {
    pathParams: GetGenrePathParams;
    queryParams: GetGenreQueryParams;
}
export declare class GetGenreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
