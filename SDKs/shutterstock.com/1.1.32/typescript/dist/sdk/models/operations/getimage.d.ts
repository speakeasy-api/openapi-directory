import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetImageSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Amount of detail to render in the response
 */
export declare enum GetImageViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetImageRequest extends SpeakeasyBase {
    /**
     * Image ID
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
    view?: GetImageViewEnum;
}
export declare class GetImageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    image?: shared.Image;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
