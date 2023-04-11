import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deprecated: this instruction format is not supported any more. Instruction from a CSV file.
 */
export declare class GoogleCloudDatalabelingV1beta1CsvInstruction extends SpeakeasyBase {
    /**
     * CSV file for the instruction. Only gcs path is allowed.
     */
    gcsFileUri?: string;
}
