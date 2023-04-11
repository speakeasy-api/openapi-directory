import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Found
 */
export declare class GetCustomers302ApplicationJSON extends SpeakeasyBase {
    location?: string;
}
export declare class GetCustomersResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Found
     */
    getCustomers302ApplicationJSONObject?: GetCustomers302ApplicationJSON;
}
