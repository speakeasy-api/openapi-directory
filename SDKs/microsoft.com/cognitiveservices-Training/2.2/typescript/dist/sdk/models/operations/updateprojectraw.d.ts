import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProjectRawRequest extends SpeakeasyBase {
    /**
     * The updated project model.
     */
    requestBody: Uint8Array;
    trainingKey: string;
    /**
     * The id of the project to update.
     */
    projectId: string;
}
export declare class UpdateProjectRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    project?: shared.Project;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
