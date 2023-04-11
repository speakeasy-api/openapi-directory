import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSipIpAccessControlListMappingServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSipIpAccessControlListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSipIpAccessControlListMappingRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies the SIP domain.
     */
    domainSid: string;
    /**
     * A 34 character string that uniquely identifies the resource to delete.
     */
    sid: string;
}
export declare class DeleteSipIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
