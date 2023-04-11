import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindPlacesPrefixFindPlacesPrefixGetSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
/**
 * An enumeration.
 */
export declare enum FindPlacesPrefixFindPlacesPrefixGetLanguageLanguageEnum {
    Cs = "cs",
    En = "en",
    De = "de",
    Es = "es",
    Fr = "fr",
    Pl = "pl",
    Pt = "pt"
}
export declare class FindPlacesPrefixFindPlacesPrefixGetRequest extends SpeakeasyBase {
    /**
     * Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.
     */
    key?: string;
    /**
     * The language of text summaries and place names (variable names are never translated). Available languages are:
     *
     * @remarks
     *
     *    * ``en``: English
     *    * ``es``: Spanish
     *    * ``fr``: French
     *    * ``de``: German
     *    * ``pl``: Polish
     *    * ``pt``: Portuguese
     *    * ``cs``: Czech
     *
     */
    language?: FindPlacesPrefixFindPlacesPrefixGetLanguageLanguageEnum;
    /**
     * Place name or ZIP code
     */
    text: string;
}
export declare class FindPlacesPrefixFindPlacesPrefixGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    findPlacesModels?: shared.FindPlacesModel[];
    /**
     * Error in passed parameter.
     */
    generalRequestError?: shared.GeneralRequestError;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
