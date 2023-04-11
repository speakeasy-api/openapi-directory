import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisOutputConfig } from "./iampolicyanalysisoutputconfig";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
/**
 * A request message for AssetService.AnalyzeIamPolicyLongrunning.
 */
export declare class AnalyzeIamPolicyLongrunningRequest extends SpeakeasyBase {
    /**
     * IAM policy analysis query message.
     */
    analysisQuery?: IamPolicyAnalysisQuery;
    /**
     * Output configuration for export IAM policy analysis destination.
     */
    outputConfig?: IamPolicyAnalysisOutputConfig;
    /**
     * Optional. The name of a saved query, which must be in the format of: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id If both `analysis_query` and `saved_analysis_query` are provided, they will be merged together with the `saved_analysis_query` as base and the `analysis_query` as overrides. For more details of the merge behavior, please refer to the [MergeFrom](https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.message#Message.MergeFrom.details) doc. Note that you cannot override primitive fields with default value, such as 0 or empty string, etc., because we use proto3, which doesn't support field presence yet.
     */
    savedAnalysisQuery?: string;
}
