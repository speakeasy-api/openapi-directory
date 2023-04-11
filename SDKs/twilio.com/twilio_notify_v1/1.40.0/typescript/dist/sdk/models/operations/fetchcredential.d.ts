import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCredentialServerList: readonly ["https://notify.twilio.com"];
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
    notifyV1Credential?: shared.NotifyV1Credential;
}
