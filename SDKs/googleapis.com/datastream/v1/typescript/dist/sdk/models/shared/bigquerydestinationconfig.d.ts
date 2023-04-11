import { SpeakeasyBase } from "../../../internal/utils";
import { SingleTargetDataset } from "./singletargetdataset";
import { SourceHierarchyDatasets } from "./sourcehierarchydatasets";
/**
 * BigQuery destination configuration
 */
export declare class BigQueryDestinationConfig extends SpeakeasyBase {
    /**
     * The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing this field will only affect new tables created in the future, but existing tables will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.
     */
    dataFreshness?: string;
    /**
     * A single target dataset to which all data will be streamed.
     */
    singleTargetDataset?: SingleTargetDataset;
    /**
     * Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
     */
    sourceHierarchyDatasets?: SourceHierarchyDatasets;
}
