import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSfxListDetailsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Which library to fetch from
 */
export declare enum GetSfxListDetailsLibraryEnum {
    Shutterstock = "shutterstock",
    Premier = "premier",
    Premiumbeat = "premiumbeat"
}
/**
 * Amount of detail to render in the response
 */
export declare enum GetSfxListDetailsViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetSfxListDetailsRequest extends SpeakeasyBase {
    /**
     * One or more sound effect IDs
     */
    id: string[];
    /**
     * Language for the keywords and categories in the response
     */
    language?: shared.LanguageEnum;
    /**
     * Which library to fetch from
     */
    library?: GetSfxListDetailsLibraryEnum;
    /**
     * The ID of the search that is related to this request
     */
    searchId?: string;
    /**
     * Amount of detail to render in the response
     */
    view?: GetSfxListDetailsViewEnum;
}
export declare class GetSfxListDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sfxDataList?: shared.SFXDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
