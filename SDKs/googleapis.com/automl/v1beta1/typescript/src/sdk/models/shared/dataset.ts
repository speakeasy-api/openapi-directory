/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ImageClassificationDatasetMetadata } from "./imageclassificationdatasetmetadata";
import { TablesDatasetMetadata } from "./tablesdatasetmetadata";
import { TextClassificationDatasetMetadata } from "./textclassificationdatasetmetadata";
import { TextSentimentDatasetMetadata } from "./textsentimentdatasetmetadata";
import { TranslationDatasetMetadata } from "./translationdatasetmetadata";
import { Expose, Type } from "class-transformer";

/**
 * A workspace for solving a single, particular machine learning (ML) problem. A workspace contains examples that may be annotated.
 */
export class Dataset extends SpeakeasyBase {
  /**
   * Output only. Timestamp when this dataset was created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createTime" })
  createTime?: string;

  /**
   * User-provided description of the dataset. The description can be up to 25000 characters long.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Required. The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  /**
   * Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "etag" })
  etag?: string;

  /**
   * Output only. The number of examples in the dataset.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "exampleCount" })
  exampleCount?: number;

  /**
   * Dataset metadata that is specific to image classification.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "imageClassificationDatasetMetadata" })
  @Type(() => ImageClassificationDatasetMetadata)
  imageClassificationDatasetMetadata?: ImageClassificationDatasetMetadata;

  /**
   * Dataset metadata specific to image object detection.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "imageObjectDetectionDatasetMetadata" })
  imageObjectDetectionDatasetMetadata?: Record<string, any>;

  /**
   * Output only. The resource name of the dataset. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Metadata for a dataset used for AutoML Tables.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tablesDatasetMetadata" })
  @Type(() => TablesDatasetMetadata)
  tablesDatasetMetadata?: TablesDatasetMetadata;

  /**
   * Dataset metadata for classification.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "textClassificationDatasetMetadata" })
  @Type(() => TextClassificationDatasetMetadata)
  textClassificationDatasetMetadata?: TextClassificationDatasetMetadata;

  /**
   * Dataset metadata that is specific to text extraction
   */
  @SpeakeasyMetadata()
  @Expose({ name: "textExtractionDatasetMetadata" })
  textExtractionDatasetMetadata?: Record<string, any>;

  /**
   * Dataset metadata for text sentiment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "textSentimentDatasetMetadata" })
  @Type(() => TextSentimentDatasetMetadata)
  textSentimentDatasetMetadata?: TextSentimentDatasetMetadata;

  /**
   * Dataset metadata that is specific to translation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "translationDatasetMetadata" })
  @Type(() => TranslationDatasetMetadata)
  translationDatasetMetadata?: TranslationDatasetMetadata;

  /**
   * Dataset metadata specific to video classification. All Video Classification datasets are treated as multi label.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "videoClassificationDatasetMetadata" })
  videoClassificationDatasetMetadata?: Record<string, any>;

  /**
   * Dataset metadata specific to video object tracking.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "videoObjectTrackingDatasetMetadata" })
  videoObjectTrackingDatasetMetadata?: Record<string, any>;
}
