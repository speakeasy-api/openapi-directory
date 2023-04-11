import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelTerminalCheckoutSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CancelTerminalCheckoutRequest extends SpeakeasyBase {
    /**
     * The unique ID for the desired `TerminalCheckout`.
     */
    checkoutId: string;
}
export declare class CancelTerminalCheckoutResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelTerminalCheckoutResponse?: shared.CancelTerminalCheckoutResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
