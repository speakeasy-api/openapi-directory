import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Submissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /submissions/{submission_id}
     *
     * @remarks
     * ### Get a submission
     *
     * Get the latest details for a specific [submission](https://www.heraldapi.com/docs/submission).
     */
    getSubmissionsSubmissionId(req: operations.GetSubmissionsSubmissionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSubmissionsSubmissionIdResponse>;
    /**
     * /submissions
     *
     * @remarks
     * ### Create a submission
     *
     * A [submission](https://www.heraldapi.com/docs/submission) creates quotes by sending an application to the institutions associated with a list of desired products. A submission can be for a single product or multiple products.
     *
     * > The `application` object of the request can either be a full application (with all `risk_values` and `coverage_values`), or the `id` of a completed application created via [`/applications`](../reference/HeraldAPI.v1.yaml/paths/~1applications/post). See the 'examples' dropdown to the right for example requests and responses.
     */
    postSubmissions(req: operations.PostSubmissionsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostSubmissionsResponse>;
}
