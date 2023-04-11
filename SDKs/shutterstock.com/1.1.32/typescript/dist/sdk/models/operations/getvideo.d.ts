import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVideoSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Amount of detail to render in the response
 */
export declare enum GetVideoViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetVideoRequest extends SpeakeasyBase {
    /**
     * Video ID
     */
    id: string;
    /**
     * Language for the keywords and categories in the response
     */
    language?: shared.LanguageEnum;
    /**
     * The ID of the search that is related to this request
     */
    searchId?: string;
    /**
     * Amount of detail to render in the response
     */
    view?: GetVideoViewEnum;
}
export declare class GetVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    video?: shared.Video;
}
