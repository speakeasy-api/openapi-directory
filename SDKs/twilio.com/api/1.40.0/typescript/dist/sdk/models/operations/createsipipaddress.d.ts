import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSipIpAddressServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipIpAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSipIpAddressCreateSipIpAddressRequest extends SpeakeasyBase {
    /**
     * An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used.
     */
    cidrPrefixLength?: number;
    /**
     * A human readable descriptive text for this resource, up to 255 characters long.
     */
    friendlyName: string;
    /**
     * An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today.
     */
    ipAddress: string;
}
export declare class CreateSipIpAddressRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * The IpAccessControlList Sid with which to associate the created IpAddress resource.
     */
    ipAccessControlListSid: string;
    requestBody?: CreateSipIpAddressCreateSipIpAddressRequest;
}
export declare class CreateSipIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountSipSipIpAccessControlListSipIpAddress?: shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress;
}
