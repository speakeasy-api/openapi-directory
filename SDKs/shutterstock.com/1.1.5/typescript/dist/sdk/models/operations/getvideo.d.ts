import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetVideoViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetVideoQueryParams extends SpeakeasyBase {
    language?: shared.LanguageEnum;
    view?: GetVideoViewEnum;
}
export declare class GetVideoSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetVideoRequest extends SpeakeasyBase {
    pathParams: GetVideoPathParams;
    queryParams: GetVideoQueryParams;
    security: GetVideoSecurity;
}
export declare class GetVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    video?: shared.Video;
}
