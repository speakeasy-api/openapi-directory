import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListAddressServerList: readonly ["https://api.twilio.com"];
export declare class ListAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListAddressRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to read.
     */
    accountSid: string;
    /**
     * The `customer_name` of the Address resources to read.
     */
    customerName?: string;
    /**
     * The string that identifies the Address resources to read.
     */
    friendlyName?: string;
    /**
     * The ISO country code of the Address resources to read.
     */
    isoCountry?: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
/**
 * OK
 */
export declare class ListAddressListAddressResponse extends SpeakeasyBase {
    addresses?: shared.ApiV2010AccountAddress[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAddressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listAddressResponse?: ListAddressListAddressResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
