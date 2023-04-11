import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter by status
 */
export declare enum GetOrdersOrderStatusEnum {
    Active = "Active",
    Cancelled = "Cancelled",
    Completed = "Completed"
}
export declare class GetOrdersRequest extends SpeakeasyBase {
    /**
     * The maximum number of items to return. If the value exceeds the maximum, then the maximum value will be used.
     */
    limit?: string;
    /**
     * The number of items to skip before starting to collect the result set.
     */
    offset?: string;
    /**
     * Filter by status
     */
    orderStatus?: GetOrdersOrderStatusEnum;
}
export declare class GetOrdersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listOfOrders?: shared.ListOfOrders;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
