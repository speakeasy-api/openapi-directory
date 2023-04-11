import { SpeakeasyBase } from "../../../internal/utils";
import { Result } from "./result";
export declare class Report extends SpeakeasyBase {
    /**
     * The Date when the report was created.
     */
    created?: Date;
    /**
     * Id of the file on which the report was applied.
     */
    fileId: string;
    /**
     * Process_id of the process which was applied. Processes are "color-classification".
     */
    processId: number;
    /**
     * Number of the created report.
     */
    reportNumber: number;
    result?: Result;
    /**
     * Result_id of the result which was created.
     */
    resultId: number;
}
