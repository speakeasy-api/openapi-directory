import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateBindingServerList: readonly ["https://notify.twilio.com"];
export declare class CreateBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateBindingCreateBindingRequest extends SpeakeasyBase {
    /**
     * The channel-specific address. For APNS, the device token. For FCM and GCM, the registration token. For SMS, a phone number in E.164 format. For Facebook Messenger, the Messenger ID of the user or a phone number in E.164 format.
     */
    address: string;
    bindingType: shared.BindingEnumBindingTypeEnum;
    /**
     * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) resource to be used to send notifications to this Binding. If present, this overrides the Credential specified in the Service resource. Applies to only `apn`, `fcm`, and `gcm` type Bindings.
     */
    credentialSid?: string;
    /**
     * Deprecated.
     */
    endpoint?: string;
    /**
     * The `identity` value that uniquely identifies the new resource's [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/notify/api/service-resource). Up to 20 Bindings can be created for the same Identity in a given Service.
     */
    identity: string;
    /**
     * The protocol version to use to send the notification. This defaults to the value of `default_xxxx_notification_protocol_version` for the protocol in the [Service](https://www.twilio.com/docs/notify/api/service-resource). The current version is `"3"` for `apn`, `fcm`, and `gcm` type Bindings. The parameter is not applicable to `sms` and `facebook-messenger` type Bindings as the data format is fixed.
     */
    notificationProtocolVersion?: string;
    /**
     * A tag that can be used to select the Bindings to notify. Repeat this parameter to specify more than one tag, up to a total of 20 tags.
     */
    tag?: string[];
}
export declare class CreateBindingRequest extends SpeakeasyBase {
    requestBody?: CreateBindingCreateBindingRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/notify/api/service-resource) to create the resource under.
     */
    serviceSid: string;
}
export declare class CreateBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    notifyV1ServiceBinding?: shared.NotifyV1ServiceBinding;
}
