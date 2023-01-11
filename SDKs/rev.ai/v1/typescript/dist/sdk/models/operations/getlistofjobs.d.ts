import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListOfJobsQueryParams extends SpeakeasyBase {
    limit?: number;
    startingAfter?: string;
}
/**
 * Problem details object returned on errors
**/
export declare class GetListOfJobs400ApplicationProblemPlusJson extends SpeakeasyBase {
    parameters?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class GetListOfJobsRequest extends SpeakeasyBase {
    queryParams: GetListOfJobsQueryParams;
}
export declare class GetListOfJobsResponse extends SpeakeasyBase {
    contentType: string;
    getListOfJobs400ApplicationProblemPlusJsonObject?: GetListOfJobs400ApplicationProblemPlusJson;
    getListOfJobs401ApplicationProblemPlusJsonAny?: any;
    jobs?: shared.Job[];
    statusCode: number;
}
