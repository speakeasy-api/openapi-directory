import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOnePlanRequest extends SpeakeasyBase {
    planId: string;
    xApiKey?: string;
}
/**
 * 404
 */
export declare class GetOnePlan404ApplicationJSON extends SpeakeasyBase {
    code?: string;
    message?: string;
    status?: boolean;
    statusCode?: number;
}
export declare class GetOnePlan200ApplicationJSONResult extends SpeakeasyBase {
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
export declare class GetOnePlan200ApplicationJSON extends SpeakeasyBase {
    result?: GetOnePlan200ApplicationJSONResult;
}
export declare class GetOnePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * 200
     */
    getOnePlan200ApplicationJSONObject?: GetOnePlan200ApplicationJSON;
    /**
     * 404
     */
    getOnePlan404ApplicationJSONObject?: GetOnePlan404ApplicationJSON;
}
