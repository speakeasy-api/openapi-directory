import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateModelBuildServerList: readonly ["https://autopilot.twilio.com"];
export declare class CreateModelBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateModelBuildCreateModelBuildRequest extends SpeakeasyBase {
    /**
     * The URL we should call using a POST method to send status information to your application.
     */
    statusCallback?: string;
    /**
     * An application-defined string that uniquely identifies the new resource. This value must be a unique string of no more than 64 characters. It can be used as an alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName?: string;
}
export declare class CreateModelBuildRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the new resource.
     */
    assistantSid: string;
    requestBody?: CreateModelBuildCreateModelBuildRequest;
}
export declare class CreateModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    autopilotV1AssistantModelBuild?: shared.AutopilotV1AssistantModelBuild;
}
