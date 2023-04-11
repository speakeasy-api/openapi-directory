import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateMessagingConfigurationServerList: readonly ["https://verify.twilio.com"];
export declare class UpdateMessagingConfigurationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateMessagingConfigurationUpdateMessagingConfigurationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) to be used to send SMS to the country of this configuration.
     */
    messagingServiceSid: string;
}
export declare class UpdateMessagingConfigurationRequest extends SpeakeasyBase {
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country this configuration will be applied to. If this is a global configuration, Country will take the value `all`.
     */
    country: string;
    requestBody?: UpdateMessagingConfigurationUpdateMessagingConfigurationRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is associated with.
     */
    serviceSid: string;
}
export declare class UpdateMessagingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2ServiceMessagingConfiguration?: shared.VerifyV2ServiceMessagingConfiguration;
}
