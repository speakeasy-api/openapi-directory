import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteMessagingConfigurationServerList: readonly ["https://verify.twilio.com"];
export declare class DeleteMessagingConfigurationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteMessagingConfigurationRequest extends SpeakeasyBase {
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country this configuration will be applied to. If this is a global configuration, Country will take the value `all`.
     */
    country: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is associated with.
     */
    serviceSid: string;
}
export declare class DeleteMessagingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
