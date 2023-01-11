import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJobByIdPathParams extends SpeakeasyBase {
    id: string;
}
/**
 * Problem details object returned on errors
**/
export declare class GetJobById404ApplicationProblemPlusJson extends SpeakeasyBase {
    status?: number;
    title?: string;
    type?: string;
}
export declare class GetJobByIdRequest extends SpeakeasyBase {
    pathParams: GetJobByIdPathParams;
}
export declare class GetJobByIdResponse extends SpeakeasyBase {
    contentType: string;
    getJobById401ApplicationProblemPlusJsonAny?: any;
    getJobById404ApplicationProblemPlusJsonObject?: GetJobById404ApplicationProblemPlusJson;
    job?: shared.Job;
    statusCode: number;
}
