import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProjectFormRequest extends SpeakeasyBase {
    /**
     * The updated project model.
     */
    projectInput: shared.ProjectInput;
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * The id of the project to update.
     */
    projectId: string;
}
export declare class UpdateProjectFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    project?: shared.Project;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
