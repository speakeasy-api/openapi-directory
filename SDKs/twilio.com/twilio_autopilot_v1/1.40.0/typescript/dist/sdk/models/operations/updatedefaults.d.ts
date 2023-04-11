import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDefaultsServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateDefaultsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDefaultsUpdateDefaultsRequest extends SpeakeasyBase {
    /**
     * A JSON string that describes the default task links for the `assistant_initiation`, `collect`, and `fallback` situations.
     */
    defaults?: any;
}
export declare class UpdateDefaultsRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to update.
     */
    assistantSid: string;
    requestBody?: UpdateDefaultsUpdateDefaultsRequest;
}
export declare class UpdateDefaultsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantDefaults?: shared.AutopilotV1AssistantDefaults;
}
