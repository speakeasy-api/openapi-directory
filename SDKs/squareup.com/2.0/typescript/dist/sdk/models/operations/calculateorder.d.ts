import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CalculateOrderSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CalculateOrderResponse extends SpeakeasyBase {
    /**
     * Success
     */
    calculateOrderResponse?: shared.CalculateOrderResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
