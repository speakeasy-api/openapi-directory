import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported.
 */
export declare enum CreateApplicationRequestBodyTypeEnum {
    Voice = "voice",
    Messages = "messages"
}
export declare class CreateApplicationRequestBody extends SpeakeasyBase {
    /**
     * The HTTP method used to make the request to `answer_url`. The default value is `GET`.
     */
    answerMethod?: string;
    /**
     * The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`. Required for inbound calls only.
     */
    answerUrl?: string;
    /**
     * You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
     */
    apiKey: string;
    /**
     * You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
     */
    apiSecret: string;
    /**
     * The HTTP method used to send event information to `event_url`. The default value is `POST`. For `voice` type applications only.
     */
    eventMethod?: string;
    /**
     * Nexmo sends event information asynchronously to this URL when status changes for `voice` applications. Always required for `voice` applications.
     */
    eventUrl?: string;
    /**
     * The HTTP method used to send event information to `inbound_url`. The default value is `POST`. For `messages` type applications only.
     */
    inboundMethod?: string;
    /**
     * Nexmo sends a request to this URL when an inbound message is received. Required for `messages` type applications only.
     */
    inboundUrl?: string;
    /**
     * The name of your application.
     */
    name: string;
    /**
     * The HTTP method used to send event information to `status_url`. The default value is `POST`. For `messages` type applications only.
     */
    statusMethod?: string;
    /**
     * Nexmo sends event information asynchronously to this URL when status changes. Required for `messages` type applications only.
     */
    statusUrl?: string;
    /**
     * The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported.
     */
    type: CreateApplicationRequestBodyTypeEnum;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    applicationCreated?: shared.ApplicationCreated;
}
