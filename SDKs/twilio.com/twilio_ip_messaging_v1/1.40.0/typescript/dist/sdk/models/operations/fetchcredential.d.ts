import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCredentialServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCredentialRequest extends SpeakeasyBase {
    sid: string;
}
export declare class FetchCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV1Credential?: shared.IpMessagingV1Credential;
}
