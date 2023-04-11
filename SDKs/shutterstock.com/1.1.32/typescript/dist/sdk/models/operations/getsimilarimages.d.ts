import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSimilarImagesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare enum GetSimilarImagesLicenseEnum {
    Commercial = "commercial",
    Editorial = "editorial"
}
/**
 * Amount of detail to render in the response
 */
export declare enum GetSimilarImagesViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetSimilarImagesRequest extends SpeakeasyBase {
    /**
     * The asset ID or upload ID to find similar images for
     */
    assetId: string;
    /**
     * Language for the keywords and categories in the response
     */
    language?: shared.LanguageEnum;
    /**
     * Show only images with the specified license
     */
    license?: GetSimilarImagesLicenseEnum[];
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Enable or disable safe search
     */
    safe?: boolean;
    /**
     * Amount of detail to render in the response
     */
    view?: GetSimilarImagesViewEnum;
}
export declare class GetSimilarImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    imageSearchResults?: shared.ImageSearchResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
