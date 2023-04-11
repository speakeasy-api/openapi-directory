import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    project?: shared.Project;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
