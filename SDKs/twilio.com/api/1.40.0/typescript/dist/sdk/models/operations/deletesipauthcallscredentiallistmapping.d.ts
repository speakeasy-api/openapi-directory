import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSipAuthCallsCredentialListMappingServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSipAuthCallsCredentialListMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the CredentialListMapping resources to delete.
     */
    accountSid: string;
    /**
     * The SID of the SIP domain that contains the resource to delete.
     */
    domainSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the CredentialListMapping resource to delete.
     */
    sid: string;
}
export declare class DeleteSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
