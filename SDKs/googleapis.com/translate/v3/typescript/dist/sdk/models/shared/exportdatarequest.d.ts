import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetOutputConfig } from "./datasetoutputconfig";
/**
 * Request message for ExportData.
 */
export declare class ExportDataRequest extends SpeakeasyBase {
    /**
     * Output configuration for datasets.
     */
    outputConfig?: DatasetOutputConfig;
}
