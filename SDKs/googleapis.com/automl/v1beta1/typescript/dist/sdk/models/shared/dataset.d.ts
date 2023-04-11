import { SpeakeasyBase } from "../../../internal/utils";
import { ImageClassificationDatasetMetadata } from "./imageclassificationdatasetmetadata";
import { TablesDatasetMetadata } from "./tablesdatasetmetadata";
import { TextClassificationDatasetMetadata } from "./textclassificationdatasetmetadata";
import { TextSentimentDatasetMetadata } from "./textsentimentdatasetmetadata";
import { TranslationDatasetMetadata } from "./translationdatasetmetadata";
/**
 * A workspace for solving a single, particular machine learning (ML) problem. A workspace contains examples that may be annotated.
 */
export declare class Dataset extends SpeakeasyBase {
    /**
     * Output only. Timestamp when this dataset was created.
     */
    createTime?: string;
    /**
     * User-provided description of the dataset. The description can be up to 25000 characters long.
     */
    description?: string;
    /**
     * Required. The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.
     */
    displayName?: string;
    /**
     * Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
     */
    etag?: string;
    /**
     * Output only. The number of examples in the dataset.
     */
    exampleCount?: number;
    /**
     * Dataset metadata that is specific to image classification.
     */
    imageClassificationDatasetMetadata?: ImageClassificationDatasetMetadata;
    /**
     * Dataset metadata specific to image object detection.
     */
    imageObjectDetectionDatasetMetadata?: Record<string, any>;
    /**
     * Output only. The resource name of the dataset. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`
     */
    name?: string;
    /**
     * Metadata for a dataset used for AutoML Tables.
     */
    tablesDatasetMetadata?: TablesDatasetMetadata;
    /**
     * Dataset metadata for classification.
     */
    textClassificationDatasetMetadata?: TextClassificationDatasetMetadata;
    /**
     * Dataset metadata that is specific to text extraction
     */
    textExtractionDatasetMetadata?: Record<string, any>;
    /**
     * Dataset metadata for text sentiment.
     */
    textSentimentDatasetMetadata?: TextSentimentDatasetMetadata;
    /**
     * Dataset metadata that is specific to translation.
     */
    translationDatasetMetadata?: TranslationDatasetMetadata;
    /**
     * Dataset metadata specific to video classification. All Video Classification datasets are treated as multi label.
     */
    videoClassificationDatasetMetadata?: Record<string, any>;
    /**
     * Dataset metadata specific to video object tracking.
     */
    videoObjectTrackingDatasetMetadata?: Record<string, any>;
}
