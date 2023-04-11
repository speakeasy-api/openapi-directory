import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSfxDetailsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Which library to fetch from
 */
export declare enum GetSfxDetailsLibraryEnum {
    Shutterstock = "shutterstock",
    Premier = "premier",
    Premiumbeat = "premiumbeat"
}
/**
 * Amount of detail to render in the response
 */
export declare enum GetSfxDetailsViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetSfxDetailsRequest extends SpeakeasyBase {
    /**
     * Audio track ID
     */
    id: number;
    /**
     * Language for the keywords and categories in the response
     */
    language?: shared.LanguageEnum;
    /**
     * Which library to fetch from
     */
    library?: GetSfxDetailsLibraryEnum;
    /**
     * The ID of the search that is related to this request
     */
    searchId?: string;
    /**
     * Amount of detail to render in the response
     */
    view?: GetSfxDetailsViewEnum;
}
export declare class GetSfxDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sfx?: shared.Sfx;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
