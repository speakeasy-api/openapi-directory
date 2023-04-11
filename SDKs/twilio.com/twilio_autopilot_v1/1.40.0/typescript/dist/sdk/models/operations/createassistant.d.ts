import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateAssistantServerList: readonly ["https://autopilot.twilio.com"];
export declare class CreateAssistantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateAssistantCreateAssistantRequest extends SpeakeasyBase {
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
     * A descriptive string that you create to describe the new resource. It is not unique and can be up to 255 characters long.
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
     * An application-defined string that uniquely identifies the new resource. It can be used as an alternative to the `sid` in the URL path to address the resource. The first 64 characters must be unique.
     */
    uniqueName?: string;
}
export declare class CreateAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    autopilotV1Assistant?: shared.AutopilotV1Assistant;
}
