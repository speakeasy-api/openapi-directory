import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSipDomainServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSipDomainSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSipDomainRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resources to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the SipDomain resource to delete.
     */
    sid: string;
}
export declare class DeleteSipDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
