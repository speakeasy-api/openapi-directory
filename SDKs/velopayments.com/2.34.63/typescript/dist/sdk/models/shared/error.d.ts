import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorData } from "./errordata";
import { LocalisationDetails } from "./localisationdetails";
/**
 * the location type in the request that was the cause of the error
 *
 * @remarks
 *
 */
export declare enum ErrorLocationTypeEnum {
    RequestBody = "requestBody",
    QueryParam = "queryParam",
    RequestParam = "requestParam",
    Header = "header",
    PathParam = "pathParam"
}
export declare class ErrorT extends SpeakeasyBase {
    /**
     * Unique numeric code that can be used for switching client behavior or to drive translated or customised error messages
     */
    errorCode?: string;
    errorData?: ErrorData;
    /**
     * English language message indicating the nature of the error
     */
    errorMessage?: string;
    localisationDetails?: LocalisationDetails;
    /**
     * the property or object that caused the error
     */
    location?: string;
    /**
     * the location type in the request that was the cause of the error
     *
     * @remarks
     *
     */
    locationType?: ErrorLocationTypeEnum;
    /**
     * a camel-cased string that can be used by clients to localise client error messages (deprecated)
     */
    reasonCode?: string;
}
