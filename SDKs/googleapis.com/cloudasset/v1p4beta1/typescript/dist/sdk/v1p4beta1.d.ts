import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1p4beta1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Analyzes IAM policies to answer which identities have what accesses on which resources.
     */
    cloudassetAnalyzeIamPolicy(req: operations.CloudassetAnalyzeIamPolicyRequest, security: operations.CloudassetAnalyzeIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetAnalyzeIamPolicyResponse>;
    /**
     * Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.
     */
    cloudassetExportIamPolicyAnalysis(req: operations.CloudassetExportIamPolicyAnalysisRequest, security: operations.CloudassetExportIamPolicyAnalysisSecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetExportIamPolicyAnalysisResponse>;
}
