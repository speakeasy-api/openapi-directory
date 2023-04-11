import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectsReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    /**
     * User stats for client and vendors
     */
    projectList?: shared.ProjectList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
