import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsCreateResponse extends SpeakeasyBase {
    contentType: string;
    projectResponse?: shared.ProjectResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
