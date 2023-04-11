import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTerminalRefundSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetTerminalRefundRequest extends SpeakeasyBase {
    /**
     * The unique ID for the desired `TerminalRefund`.
     */
    terminalRefundId: string;
}
export declare class GetTerminalRefundResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getTerminalRefundResponse?: shared.GetTerminalRefundResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
