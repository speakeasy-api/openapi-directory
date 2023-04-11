import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesLanguagesJsonRequest extends SpeakeasyBase {
    /**
     * The maximum number of records to return
     */
    max?: number;
    /**
     * Return records starting at the offset index.
     */
    offset?: number;
    /**
     * The name of the property to which sorting will be applied
     */
    sort?: string;
}
export declare class GetResourcesLanguagesJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns the list Languages.
     */
    languageWrappeds?: shared.LanguageWrapped[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
