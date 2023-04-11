import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetReference } from "./datasetreference";
export declare class DatasetListDatasets extends SpeakeasyBase {
    datasetReference?: DatasetReference;
    /**
     * A descriptive name for the dataset, if one exists.
     */
    friendlyName?: string;
    /**
     * The fully-qualified, unique, opaque ID of the dataset.
     */
    id?: string;
    /**
     * The resource type. This property always returns the value "bigquery#dataset".
     */
    kind?: string;
    /**
     * The labels associated with this dataset. You can use these to organize and group your datasets.
     */
    labels?: Record<string, string>;
    /**
     * The geographic location where the data resides.
     */
    location?: string;
}
/**
 * Successful response
 */
export declare class DatasetList extends SpeakeasyBase {
    /**
     * An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project.
     */
    datasets?: DatasetListDatasets[];
    /**
     * A hash value of the results page. You can use this property to determine if the page has changed since the last request.
     */
    etag?: string;
    /**
     * The list type. This property always returns the value "bigquery#datasetList".
     */
    kind?: string;
    /**
     * A token that can be used to request the next results page. This property is omitted on the final results page.
     */
    nextPageToken?: string;
}
