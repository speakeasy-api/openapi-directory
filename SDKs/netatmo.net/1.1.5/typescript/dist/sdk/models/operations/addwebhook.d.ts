import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddwebhookSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class AddwebhookRequest extends SpeakeasyBase {
    /**
     * Webhooks are only available for Welcome, enter app_camera.
     */
    appType: string;
    /**
     * Your webhook callback url
     */
    url: string;
}
export declare class AddwebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naWelcomeWebhookResponse?: shared.NAWelcomeWebhookResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
