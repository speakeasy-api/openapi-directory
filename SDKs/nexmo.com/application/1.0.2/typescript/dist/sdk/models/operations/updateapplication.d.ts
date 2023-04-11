import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported. You  can't change the type of application.
 */
export declare enum UpdateApplicationRequestBodyTypeEnum {
    Voice = "voice",
    Messages = "messages"
}
export declare class UpdateApplicationRequestBody extends SpeakeasyBase {
    /**
     * The HTTP method used to make the request to `answer_url`. The default value is `GET`.
     */
    answerMethod?: string;
    /**
     * The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`.
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
     * The HTTP method used to send event information to `event_url`. The default value is POST.
     */
    eventMethod?: string;
    /**
     * Nexmo sends event information asynchronously to this URL when status changes.
     */
    eventUrl?: string;
    /**
     * The name of your application.
     */
    name: string;
    /**
     * The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported. You  can't change the type of application.
     */
    type: UpdateApplicationRequestBodyTypeEnum;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    requestBody?: UpdateApplicationRequestBody;
    /**
     * The ID allocated to your application by Nexmo.
     */
    appId: string;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    application?: shared.Application;
}
