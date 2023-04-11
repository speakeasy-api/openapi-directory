import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ToggleCorporateAutoChargeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound UnauthorizedUser MissingCorporateAccount
     */
    error?: shared.ErrorT;
    /**
     * Successful operation
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
