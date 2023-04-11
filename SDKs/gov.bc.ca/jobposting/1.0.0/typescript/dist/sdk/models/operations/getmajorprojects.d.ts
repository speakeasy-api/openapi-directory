import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMajorProjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    /**
     * An array of major projects
     */
    majorProjects?: shared.MajorProject[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
