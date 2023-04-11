import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUpdatePaymentEstimateRequest extends SpeakeasyBase {
    /**
     * payment ID, for which you want to get the estimate
     */
    id: string;
    xApiKey?: string;
}
/**
 * 200
 */
export declare class GetUpdatePaymentEstimate200ApplicationJSON extends SpeakeasyBase {
    expirationEstimateDate?: string;
    id?: string;
    payAmount?: number;
    tokenId?: string;
}
export declare class GetUpdatePaymentEstimateResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * 200
     */
    getUpdatePaymentEstimate200ApplicationJSONObject?: GetUpdatePaymentEstimate200ApplicationJSON;
}
