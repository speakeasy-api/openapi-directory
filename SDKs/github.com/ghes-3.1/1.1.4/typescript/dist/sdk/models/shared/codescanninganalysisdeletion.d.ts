import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful deletion of a code scanning analysis
 */
export declare class CodeScanningAnalysisDeletion extends SpeakeasyBase {
    /**
     * Next deletable analysis in chain, with last analysis deletion confirmation
     */
    confirmDeleteUrl: string;
    /**
     * Next deletable analysis in chain, without last analysis deletion confirmation
     */
    nextAnalysisUrl: string;
}
