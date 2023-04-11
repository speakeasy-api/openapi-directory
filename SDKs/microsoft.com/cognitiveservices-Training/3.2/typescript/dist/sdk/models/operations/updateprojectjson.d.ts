import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProjectJsonRequest extends SpeakeasyBase {
    /**
     * The updated project model.
     */
    projectInput: shared.ProjectInput;
    /**
     * The id of the project to update.
     */
    projectId: string;
}
export declare class UpdateProjectJsonResponse extends SpeakeasyBase {
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
