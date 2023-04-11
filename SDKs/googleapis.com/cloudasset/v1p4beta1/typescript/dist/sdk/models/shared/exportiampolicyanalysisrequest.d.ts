import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisOutputConfig } from "./iampolicyanalysisoutputconfig";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { Options } from "./options";
/**
 * A request message for AssetService.ExportIamPolicyAnalysis.
 */
export declare class ExportIamPolicyAnalysisRequest extends SpeakeasyBase {
    /**
     * IAM policy analysis query message.
     */
    analysisQuery?: IamPolicyAnalysisQuery;
    /**
     * Contains request options.
     */
    options?: Options;
    /**
     * Output configuration for export IAM policy analysis destination.
     */
    outputConfig?: IamPolicyAnalysisOutputConfig;
}
