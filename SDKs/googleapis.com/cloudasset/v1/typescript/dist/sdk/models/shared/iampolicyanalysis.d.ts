import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { IamPolicyAnalysisResult } from "./iampolicyanalysisresult";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";
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
    /**
     * A list of non-critical errors happened during the query handling.
     */
    nonCriticalErrors?: IamPolicyAnalysisState[];
}
