import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCredentialServerList: readonly ["https://chat.twilio.com"];
export declare class FetchCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCredentialRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Credential resource to fetch.
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
    chatV1Credential?: shared.ChatV1Credential;
}
