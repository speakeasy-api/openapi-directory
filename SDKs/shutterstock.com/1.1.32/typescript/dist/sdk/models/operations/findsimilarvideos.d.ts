import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindSimilarVideosSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Amount of detail to render in the response
 */
export declare enum FindSimilarVideosViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class FindSimilarVideosRequest extends SpeakeasyBase {
    /**
     * The ID of a video for which similar videos should be returned
     */
    id: string;
    /**
     * Language for the keywords and categories in the response
     */
    language?: shared.LanguageEnum;
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Amount of detail to render in the response
     */
    view?: FindSimilarVideosViewEnum;
}
export declare class FindSimilarVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoSearchResults?: shared.VideoSearchResults;
}
