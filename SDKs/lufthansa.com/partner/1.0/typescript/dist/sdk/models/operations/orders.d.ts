import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrdersSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class OrdersRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Surname of traveller
     */
    name: string;
    /**
     * Unique order identifier
     */
    orderID: string;
}
export declare class OrdersResponse extends SpeakeasyBase {
    contentType: string;
    orders200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
