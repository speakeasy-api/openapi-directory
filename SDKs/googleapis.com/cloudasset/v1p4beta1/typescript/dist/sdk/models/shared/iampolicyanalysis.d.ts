import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { IamPolicyAnalysisResult } from "./iampolicyanalysisresult";
/**
 * An analysis message to group the query and results.
 */
export declare class IamPolicyAnalysis extends SpeakeasyBase {
    /**
     * IAM policy analysis query message.
     */
    analysisQuery?: IamPolicyAnalysisQuery;
    /**
     * A list of IamPolicyAnalysisResult that matches the analysis query, or empty if no result is found.
     */
    analysisResults?: IamPolicyAnalysisResult[];
    /**
     * Represents whether all entries in the analysis_results have been fully explored to answer the query.
     */
    fullyExplored?: boolean;
}
