import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSipIpAddressServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSipIpAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSipIpAddressRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * The IpAccessControlList Sid that identifies the IpAddress resources to delete.
     */
    ipAccessControlListSid: string;
    /**
     * A 34 character string that uniquely identifies the resource to delete.
     */
    sid: string;
}
export declare class DeleteSipIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
