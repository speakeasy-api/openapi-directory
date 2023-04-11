import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchUsersUserEmailTransferRequest extends SpeakeasyBase {
    /**
     * transfer_data
     */
    transferRequest: shared.TransferRequest;
    /**
     * user's email
     */
    userEmail: string;
}
export declare class PatchUsersUserEmailTransferResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
