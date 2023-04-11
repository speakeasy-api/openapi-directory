import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSipIpAddressServerList: readonly ["https://api.twilio.com"];
export declare class UpdateSipIpAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSipIpAddressUpdateSipIpAddressRequest extends SpeakeasyBase {
    /**
     * An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used.
     */
    cidrPrefixLength?: number;
    /**
     * A human readable descriptive text for this resource, up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today.
     */
    ipAddress?: string;
}
export declare class UpdateSipIpAddressRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * The IpAccessControlList Sid that identifies the IpAddress resources to update.
     */
    ipAccessControlListSid: string;
    requestBody?: UpdateSipIpAddressUpdateSipIpAddressRequest;
    /**
     * A 34 character string that identifies the IpAddress resource to update.
     */
    sid: string;
}
export declare class UpdateSipIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipIpAccessControlListSipIpAddress?: shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress;
}
