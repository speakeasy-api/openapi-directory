import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchServiceConfigurationServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceConfigurationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchServiceConfigurationRequest extends SpeakeasyBase {
    /**
     * The SID of the Service configuration resource to fetch.
     */
    chatServiceSid: string;
}
export declare class FetchServiceConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceConfiguration?: shared.ConversationsV1ServiceServiceConfiguration;
}
