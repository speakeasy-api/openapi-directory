import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateAssistantServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateAssistantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateAssistantUpdateAssistantRequest extends SpeakeasyBase {
    /**
     * Reserved.
     */
    callbackEvents?: string;
    /**
     * Reserved.
     */
    callbackUrl?: string;
    /**
     * A JSON object that defines the Assistant's [default tasks](https://www.twilio.com/docs/autopilot/api/assistant/defaults) for various scenarios, including initiation actions and fallback tasks.
     */
    defaults?: any;
    /**
     * A string describing the state of the assistant.
     */
    developmentStage?: string;
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored.
     */
    logQueries?: boolean;
    /**
     * The JSON string that defines the Assistant's [style sheet](https://www.twilio.com/docs/autopilot/api/assistant/stylesheet)
     */
    styleSheet?: any;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used as an alternative to the `sid` in the URL path to address the resource. The first 64 characters must be unique.
     */
    uniqueName?: string;
}
export declare class UpdateAssistantRequest extends SpeakeasyBase {
    requestBody?: UpdateAssistantUpdateAssistantRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Assistant resource to update.
     */
    sid: string;
}
export declare class UpdateAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1Assistant?: shared.AutopilotV1Assistant;
}
