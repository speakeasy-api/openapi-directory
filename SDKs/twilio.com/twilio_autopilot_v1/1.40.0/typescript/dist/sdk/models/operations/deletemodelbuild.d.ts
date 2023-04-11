import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteModelBuildServerList: readonly ["https://autopilot.twilio.com"];
export declare class DeleteModelBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteModelBuildRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to delete.
     */
    assistantSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the ModelBuild resource to delete.
     */
    sid: string;
}
export declare class DeleteModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
