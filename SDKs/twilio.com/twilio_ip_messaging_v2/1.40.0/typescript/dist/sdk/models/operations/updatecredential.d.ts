import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateCredentialServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateCredentialUpdateCredentialRequest extends SpeakeasyBase {
    apiKey?: string;
    certificate?: string;
    friendlyName?: string;
    privateKey?: string;
    sandbox?: boolean;
    secret?: string;
}
export declare class UpdateCredentialRequest extends SpeakeasyBase {
    requestBody?: UpdateCredentialUpdateCredentialRequest;
    sid: string;
}
export declare class UpdateCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV2Credential?: shared.IpMessagingV2Credential;
}
