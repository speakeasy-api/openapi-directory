import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateModelBuildServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateModelBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateModelBuildUpdateModelBuildRequest extends SpeakeasyBase {
    /**
     * An application-defined string that uniquely identifies the resource. This value must be a unique string of no more than 64 characters. It can be used as an alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName?: string;
}
export declare class UpdateModelBuildRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to update.
     */
    assistantSid: string;
    requestBody?: UpdateModelBuildUpdateModelBuildRequest;
    /**
     * The Twilio-provided string that uniquely identifies the ModelBuild resource to update.
     */
    sid: string;
}
export declare class UpdateModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantModelBuild?: shared.AutopilotV1AssistantModelBuild;
}
