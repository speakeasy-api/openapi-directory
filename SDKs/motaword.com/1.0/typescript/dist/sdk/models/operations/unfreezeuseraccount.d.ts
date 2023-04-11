import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnfreezeUserAccountRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare class UnfreezeUserAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    /**
     * Successful operation
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
