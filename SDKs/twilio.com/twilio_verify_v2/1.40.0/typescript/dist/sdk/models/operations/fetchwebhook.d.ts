import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchWebhookServerList: readonly ["https://verify.twilio.com"];
export declare class FetchWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchWebhookRequest extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Service.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Webhook resource to fetch.
     */
    sid: string;
}
export declare class FetchWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2ServiceWebhook?: shared.VerifyV2ServiceWebhook;
}
