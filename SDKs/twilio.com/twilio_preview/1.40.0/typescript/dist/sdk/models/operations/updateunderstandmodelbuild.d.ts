import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUnderstandModelBuildServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandModelBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest extends SpeakeasyBase {
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. For example: v0.1
     */
    uniqueName?: string;
}
export declare class UpdateUnderstandModelBuildRequest extends SpeakeasyBase {
    assistantSid: string;
    requestBody?: UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest;
    sid: string;
}
export declare class UpdateUnderstandModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantModelBuild?: shared.PreviewUnderstandAssistantModelBuild;
}
