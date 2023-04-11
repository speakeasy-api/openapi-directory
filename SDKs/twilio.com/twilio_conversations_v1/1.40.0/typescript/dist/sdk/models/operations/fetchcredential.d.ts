import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCredentialServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCredentialRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class FetchCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1Credential?: shared.ConversationsV1Credential;
}
