import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSimilarVideosSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare enum GetSimilarVideosLicenseEnum {
    Commercial = "commercial",
    Editorial = "editorial"
}
/**
 * Amount of detail to render in the response
 */
export declare enum GetSimilarVideosViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetSimilarVideosRequest extends SpeakeasyBase {
    /**
     * The asset ID or upload ID to find similar videos for
     */
    assetId: string;
    /**
     * Language for the keywords and categories in the response
     */
    language?: shared.LanguageEnum;
    /**
     * Show only videos with the specified license
     */
    license?: GetSimilarVideosLicenseEnum[];
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
    view?: GetSimilarVideosViewEnum;
}
export declare class GetSimilarVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoSearchResults?: shared.VideoSearchResults;
}
