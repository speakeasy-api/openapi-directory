import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetJobTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    /**
     * An array of job types
     */
    jobTypes?: shared.JobType[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
