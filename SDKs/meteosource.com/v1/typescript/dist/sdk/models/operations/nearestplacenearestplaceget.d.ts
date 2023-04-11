import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NearestPlaceNearestPlaceGetSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
/**
 * An enumeration.
 */
export declare enum NearestPlaceNearestPlaceGetLanguageLanguageEnum {
    Cs = "cs",
    En = "en",
    De = "de",
    Es = "es",
    Fr = "fr",
    Pl = "pl",
    Pt = "pt"
}
export declare class NearestPlaceNearestPlaceGetRequest extends SpeakeasyBase {
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
    language?: NearestPlaceNearestPlaceGetLanguageLanguageEnum;
    /**
     * Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4
     */
    lat: string;
    /**
     * Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4
     */
    lon: string;
}
export declare class NearestPlaceNearestPlaceGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    findPlacesModel?: shared.FindPlacesModel;
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
