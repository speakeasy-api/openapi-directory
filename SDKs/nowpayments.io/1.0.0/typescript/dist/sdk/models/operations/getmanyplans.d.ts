import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetManyPlansRequest extends SpeakeasyBase {
    /**
     * Number
     */
    limit?: string;
    /**
     * Number
     */
    offset?: string;
    xApiKey?: string;
}
export declare class GetManyPlans200ApplicationJSONResult extends SpeakeasyBase {
    amount?: number;
    cancelUrl?: any;
    createdAt?: string;
    currency?: string;
    id?: string;
    intervalDay?: string;
    ipnCallbackUrl?: any;
    partiallyPaidUrl?: any;
    successUrl?: any;
    title?: string;
    updatedAt?: string;
}
/**
 * 200
 */
export declare class GetManyPlans200ApplicationJSON extends SpeakeasyBase {
    count?: number;
    result?: GetManyPlans200ApplicationJSONResult[];
}
export declare class GetManyPlansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * 200
     */
    getManyPlans200ApplicationJSONObject?: GetManyPlans200ApplicationJSON;
}
