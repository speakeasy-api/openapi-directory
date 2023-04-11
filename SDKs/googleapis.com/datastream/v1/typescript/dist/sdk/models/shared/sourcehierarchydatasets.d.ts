import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetTemplate } from "./datasettemplate";
/**
 * Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
 */
export declare class SourceHierarchyDatasets extends SpeakeasyBase {
    /**
     * Dataset template used for dynamic dataset creation.
     */
    datasetTemplate?: DatasetTemplate;
}
