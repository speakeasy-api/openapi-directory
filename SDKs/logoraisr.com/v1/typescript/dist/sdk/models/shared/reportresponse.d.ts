import { SpeakeasyBase } from "../../../internal/utils";
import { Result } from "./result";
export declare class ReportResponse extends SpeakeasyBase {
    /**
     * The Date when the project was created.
     */
    created?: Date;
    /**
     * Id of the file on which the process was applied.
     */
    fileId?: string;
    /**
     * Process which was applied. Processes are "color-classification".
     */
    processingAlgorithm?: string;
    /**
     * Number of the report which was created.
     */
    reportNumber?: number;
    result?: Result;
}
