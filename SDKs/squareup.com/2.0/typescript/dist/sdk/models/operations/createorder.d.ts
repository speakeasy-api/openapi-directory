import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateOrderSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createOrderResponse?: shared.CreateOrderResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
