import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUnderstandAssistantServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandAssistantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUnderstandAssistantUpdateUnderstandAssistantRequest extends SpeakeasyBase {
    /**
     * Space-separated list of callback events that will trigger callbacks.
     */
    callbackEvents?: string;
    /**
     * A user-provided URL to send event callbacks to.
     */
    callbackUrl?: string;
    /**
     * The JSON actions to be executed when the user's input is not recognized as matching any Task.
     */
    fallbackActions?: any;
    /**
     * A text description for the Assistant. It is non-unique and can up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * The JSON actions to be executed on inbound phone calls when the Assistant has to say something first.
     */
    initiationActions?: any;
    /**
     * A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter. Defaults to true if no value is provided.
     */
    logQueries?: boolean;
    /**
     * The JSON object that holds the style sheet for the assistant
     */
    styleSheet?: any;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    uniqueName?: string;
}
export declare class UpdateUnderstandAssistantRequest extends SpeakeasyBase {
    requestBody?: UpdateUnderstandAssistantUpdateUnderstandAssistantRequest;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class UpdateUnderstandAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistant?: shared.PreviewUnderstandAssistant;
}
