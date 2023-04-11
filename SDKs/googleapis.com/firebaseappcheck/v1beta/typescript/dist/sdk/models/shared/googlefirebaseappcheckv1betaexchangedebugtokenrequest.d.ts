import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for the ExchangeDebugToken method.
 */
export declare class GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest extends SpeakeasyBase {
    /**
     * Required. A debug token secret. This string must match a debug token secret previously created using CreateDebugToken.
     */
    debugToken?: string;
}
