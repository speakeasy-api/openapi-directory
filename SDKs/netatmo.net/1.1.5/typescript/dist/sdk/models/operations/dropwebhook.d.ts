import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DropwebhookSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class DropwebhookRequest extends SpeakeasyBase {
    /**
     * For Welcome, use app_camera
     */
    appType: string;
}
export declare class DropwebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naWelcomeWebhookResponse?: shared.NAWelcomeWebhookResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
