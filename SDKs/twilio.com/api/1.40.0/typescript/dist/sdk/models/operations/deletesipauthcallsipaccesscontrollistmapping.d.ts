import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSipAuthCallsIpAccessControlListMappingServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSipAuthCallsIpAccessControlListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IpAccessControlListMapping resources to delete.
     */
    accountSid: string;
    /**
     * The SID of the SIP domain that contains the resources to delete.
     */
    domainSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the IpAccessControlListMapping resource to delete.
     */
    sid: string;
}
export declare class DeleteSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
