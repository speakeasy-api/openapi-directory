import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetInputConfig } from "./datasetinputconfig";
/**
 * Request message for ImportData.
 */
export declare class ImportDataRequest extends SpeakeasyBase {
    /**
     * Input configuration for datasets.
     */
    inputConfig?: DatasetInputConfig;
}
