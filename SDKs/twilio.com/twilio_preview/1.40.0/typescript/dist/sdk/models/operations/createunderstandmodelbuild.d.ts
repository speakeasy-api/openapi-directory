import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUnderstandModelBuildServerList: readonly ["https://preview.twilio.com"];
export declare class CreateUnderstandModelBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateUnderstandModelBuildCreateUnderstandModelBuildRequest extends SpeakeasyBase {
    statusCallback?: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. For example: v0.1
     */
    uniqueName?: string;
}
export declare class CreateUnderstandModelBuildRequest extends SpeakeasyBase {
    assistantSid: string;
    requestBody?: CreateUnderstandModelBuildCreateUnderstandModelBuildRequest;
}
export declare class CreateUnderstandModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewUnderstandAssistantModelBuild?: shared.PreviewUnderstandAssistantModelBuild;
}
