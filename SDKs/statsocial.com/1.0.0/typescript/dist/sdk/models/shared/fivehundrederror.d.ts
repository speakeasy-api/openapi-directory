import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Possible reasons include:<br>{success: 0, msg: Error getting application's credentials, error_code_msg: API_ERROR_GETTING_APPLICATION_INFO}<br>{success: 0, msg: Internal database error, error_code_msg: API_ERROR_DATABASE_INITIATION_ERROR}
 */
export declare class FiveHundredError extends SpeakeasyBase {
    errorCodeMsg?: string;
    msg?: string;
    success?: string;
}
