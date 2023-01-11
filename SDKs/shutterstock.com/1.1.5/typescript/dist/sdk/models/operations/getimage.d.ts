import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImagePathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetImageViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetImageQueryParams extends SpeakeasyBase {
    language?: shared.LanguageEnum;
    view?: GetImageViewEnum;
}
export declare class GetImageSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetImageRequest extends SpeakeasyBase {
    pathParams: GetImagePathParams;
    queryParams: GetImageQueryParams;
    security: GetImageSecurity;
}
export declare class GetImageResponse extends SpeakeasyBase {
    contentType: string;
    image?: shared.Image;
    statusCode: number;
}
