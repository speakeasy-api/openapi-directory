import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InsertSalesActivityRequest extends SpeakeasyBase {
    newSalesActivity?: shared.NewSalesActivity;
    /**
     * Project ID
     */
    id: number;
}
export declare class InsertSalesActivityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * BadRequest
     */
    error?: shared.ErrorT;
    /**
     * Acvitity inserted successfully
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
