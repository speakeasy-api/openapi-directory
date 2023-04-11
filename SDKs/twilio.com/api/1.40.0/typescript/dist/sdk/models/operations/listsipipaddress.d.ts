import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSipIpAddressServerList: readonly ["https://api.twilio.com"];
export declare class ListSipIpAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSipIpAddressRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * The IpAccessControlList Sid that identifies the IpAddress resources to read.
     */
    ipAccessControlListSid: string;
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
export declare class ListSipIpAddressListSipIpAddressResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    ipAddresses?: shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSipIpAddressResponse?: ListSipIpAddressListSipIpAddressResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
