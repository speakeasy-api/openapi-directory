import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSimIpAddressServerList: readonly ["https://supersim.twilio.com"];
export declare class ListSimIpAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSimIpAddressRequest extends SpeakeasyBase {
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
    /**
     * The SID of the Super SIM to list IP Addresses for.
     */
    simSid: string;
}
export declare class ListSimIpAddressListSimIpAddressResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListSimIpAddressListSimIpAddressResponse extends SpeakeasyBase {
    ipAddresses?: shared.SupersimV1SimSimIpAddress[];
    meta?: ListSimIpAddressListSimIpAddressResponseMeta;
}
export declare class ListSimIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSimIpAddressResponse?: ListSimIpAddressListSimIpAddressResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
