import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CaptureTransactionSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CaptureTransactionRequest extends SpeakeasyBase {
    locationId: string;
    transactionId: string;
}
export declare class CaptureTransactionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    captureTransactionResponse?: shared.CaptureTransactionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
