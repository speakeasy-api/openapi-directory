import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProjectRequest extends SpeakeasyBase {
    projectUpdate?: shared.ProjectUpdate;
    /**
     * Project ID
     */
    id: number;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    /**
     * Updated project
     */
    project?: shared.Project;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
