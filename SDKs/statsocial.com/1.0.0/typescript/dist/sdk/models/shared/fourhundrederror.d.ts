import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Possible reasons include:<br>{success: 0, msg: Invalid API parameters, error_code_msg: API_INVALID_PARAMS}<br>{success: 0, msg: Error please include the 'action' parameter, error_code_msg: API_MISSING_ACTION_PARAMETER}
 */
export declare class FourHundredError extends SpeakeasyBase {
    errorCodeMsg?: string;
    msg?: string;
    success?: string;
}
