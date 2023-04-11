import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportRequest extends SpeakeasyBase {
    /**
     * Id of the file on which the process is to be applied.
     */
    fileId: string;
    /**
     * Process which should applied. Processes are "color-classification".
     */
    process: string;
}
