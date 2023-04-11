import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the Order used as filter
 */
export declare enum GetOrdersStatusStatusJsonStatusEnum {
    Abandoned = "Abandoned",
    Canceled = "Canceled",
    PendingPayment = "Pending Payment",
    Paid = "Paid"
}
export declare class GetOrdersStatusStatusJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
    /**
     * Status of the Order used as filter
     */
    status: GetOrdersStatusStatusJsonStatusEnum;
}
export declare class GetOrdersStatusStatusJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orders?: shared.Order[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Status Invalid.
     */
    statusInvalid?: shared.StatusInvalid;
}
