import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsReadRequest extends SpeakeasyBase {
    /**
     * Number of the project.
     */
    projectNumber: string;
}
export declare class ProjectsReadResponse extends SpeakeasyBase {
    contentType: string;
    project?: shared.Project;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
