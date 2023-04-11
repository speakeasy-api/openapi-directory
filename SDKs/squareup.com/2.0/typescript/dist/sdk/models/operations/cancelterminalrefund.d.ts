import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelTerminalRefundSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CancelTerminalRefundRequest extends SpeakeasyBase {
    /**
     * The unique ID for the desired `TerminalRefund`.
     */
    terminalRefundId: string;
}
export declare class CancelTerminalRefundResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelTerminalRefundResponse?: shared.CancelTerminalRefundResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
