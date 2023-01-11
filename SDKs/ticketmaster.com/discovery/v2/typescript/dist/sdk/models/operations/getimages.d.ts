import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetImagesPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetImagesIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare class GetImagesQueryParams extends SpeakeasyBase {
    includeLicensedContent?: GetImagesIncludeLicensedContentEnum;
    locale?: string;
}
export declare class GetImagesRequest extends SpeakeasyBase {
    pathParams: GetImagesPathParams;
    queryParams: GetImagesQueryParams;
}
export declare class GetImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
