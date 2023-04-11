import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateCredentialServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateCredentialCreateCredentialRequest extends SpeakeasyBase {
    apiKey?: string;
    certificate?: string;
    friendlyName?: string;
    privateKey?: string;
    sandbox?: boolean;
    secret?: string;
    type: shared.CredentialEnumPushServiceEnum;
}
export declare class CreateCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    ipMessagingV2Credential?: shared.IpMessagingV2Credential;
}
