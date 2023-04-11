import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VoidTransactionSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class VoidTransactionRequest extends SpeakeasyBase {
    locationId: string;
    transactionId: string;
}
export declare class VoidTransactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    voidTransactionResponse?: shared.VoidTransactionResponse;
}
