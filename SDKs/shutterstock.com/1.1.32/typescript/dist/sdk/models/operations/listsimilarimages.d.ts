import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSimilarImagesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Amount of detail to render in the response
 */
export declare enum ListSimilarImagesViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class ListSimilarImagesRequest extends SpeakeasyBase {
    /**
     * Image ID
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
    view?: ListSimilarImagesViewEnum;
}
export declare class ListSimilarImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    imageSearchResults?: shared.ImageSearchResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
