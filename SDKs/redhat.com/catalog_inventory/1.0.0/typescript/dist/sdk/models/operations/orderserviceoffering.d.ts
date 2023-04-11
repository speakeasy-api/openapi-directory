import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderServiceOfferingRequest extends SpeakeasyBase {
    /**
     * Order parameters defining the service and provider control
     */
    orderParametersServiceOfferingInput: shared.OrderParametersServiceOfferingInput;
    /**
     * ID of the resource
     */
    id: string;
}
/**
 * Returns a task ID for the order
 */
export declare class OrderServiceOffering200ApplicationJSON extends SpeakeasyBase {
    taskId?: string;
}
export declare class OrderServiceOfferingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns a task ID for the order
     */
    orderServiceOffering200ApplicationJSONObject?: OrderServiceOffering200ApplicationJSON;
}
