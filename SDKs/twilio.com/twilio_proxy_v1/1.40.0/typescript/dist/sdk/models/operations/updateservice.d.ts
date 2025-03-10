import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceServerList: readonly ["https://proxy.twilio.com"];
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    /**
     * The URL we should call when the interaction status changes.
     */
    callbackUrl?: string;
    /**
     * The SID of the Chat Service Instance managed by Proxy Service. The Chat Service enables Proxy to forward SMS and channel messages to this chat instance. This is a one-to-one relationship.
     */
    chatInstanceSid?: string;
    /**
     * The default `ttl` value to set for Sessions created in the Service. The TTL (time to live) is measured in seconds after the Session's last create or last Interaction. The default value of `0` indicates an unlimited Session length. You can override a Session's default TTL value by setting its `ttl` value.
     */
    defaultTtl?: number;
    geoMatchLevel?: shared.ServiceEnumGeoMatchLevelEnum;
    /**
     * The URL we call on each interaction. If we receive a 403 status, we block the interaction; otherwise the interaction continues.
     */
    interceptCallbackUrl?: string;
    numberSelectionBehavior?: shared.ServiceEnumNumberSelectionBehaviorEnum;
    /**
     * The URL we should call when an inbound call or SMS action occurs on a closed or non-existent Session. If your server (or a Twilio [function](https://www.twilio.com/functions)) responds with valid [TwiML](https://www.twilio.com/docs/voice/twiml), we will process it. This means it is possible, for example, to play a message for a call, send an automated text message response, or redirect a call to another Phone Number. See [Out-of-Session Callback Response Guide](https://www.twilio.com/docs/proxy/out-session-callback-response-guide) for more information.
     */
    outOfSessionCallbackUrl?: string;
    /**
     * An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. **This value should not have PII.**
     */
    uniqueName?: string;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    requestBody?: UpdateServiceUpdateServiceRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Service resource to update.
     */
    sid: string;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    proxyV1Service?: shared.ProxyV1Service;
}
