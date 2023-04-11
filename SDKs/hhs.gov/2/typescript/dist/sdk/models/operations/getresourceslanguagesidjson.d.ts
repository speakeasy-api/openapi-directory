import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesLanguagesIdJsonRequest extends SpeakeasyBase {
    /**
     * The id of the language to look up
     */
    id: number;
}
export declare class GetResourcesLanguagesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns the Language identified by the 'id'.
     */
    languageWrappeds?: shared.LanguageWrapped[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
