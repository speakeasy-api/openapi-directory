import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCustomerRequest extends SpeakeasyBase {
    /**
     * Account ID of customer
     */
    account: number;
}
/**
 * Found
 */
export declare class GetCustomer200ApplicationJSON extends SpeakeasyBase {
    address?: string;
    balance?: number;
    city?: string;
    companyName?: string;
    companyWebsite?: string;
    country?: string;
    creditlimit?: string;
    email?: string;
    fax?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    postcode?: string;
    state?: string;
    username?: number;
}
export declare class GetCustomerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Found
     */
    getCustomer200ApplicationJSONObject?: GetCustomer200ApplicationJSON;
}
