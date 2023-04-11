import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSipIpAddressServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipIpAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSipIpAddressRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * The IpAccessControlList Sid that identifies the IpAddress resources to fetch.
     */
    ipAccessControlListSid: string;
    /**
     * A 34 character string that uniquely identifies the IpAddress resource to fetch.
     */
    sid: string;
}
export declare class FetchSipIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipIpAccessControlListSipIpAddress?: shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress;
}
