import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTerminalCheckoutSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetTerminalCheckoutRequest extends SpeakeasyBase {
    /**
     * The unique ID for the desired `TerminalCheckout`.
     */
    checkoutId: string;
}
export declare class GetTerminalCheckoutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getTerminalCheckoutResponse?: shared.GetTerminalCheckoutResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
