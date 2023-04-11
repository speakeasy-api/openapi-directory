import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTerminalRefundSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateTerminalRefundResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createTerminalRefundResponse?: shared.CreateTerminalRefundResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
