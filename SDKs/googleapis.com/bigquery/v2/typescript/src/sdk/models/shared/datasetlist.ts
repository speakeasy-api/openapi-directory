/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DatasetReference } from "./datasetreference";
import { Expose, Type } from "class-transformer";

export class DatasetListDatasets extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "datasetReference" })
  @Type(() => DatasetReference)
  datasetReference?: DatasetReference;

  /**
   * A descriptive name for the dataset, if one exists.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "friendlyName" })
  friendlyName?: string;

  /**
   * The fully-qualified, unique, opaque ID of the dataset.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The resource type. This property always returns the value "bigquery#dataset".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * The labels associated with this dataset. You can use these to organize and group your datasets.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "labels" })
  labels?: Record<string, string>;

  /**
   * The geographic location where the data resides.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "location" })
  location?: string;
}

/**
 * Successful response
 */
export class DatasetList extends SpeakeasyBase {
  /**
   * An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project.
   */
  @SpeakeasyMetadata({ elemType: DatasetListDatasets })
  @Expose({ name: "datasets" })
  @Type(() => DatasetListDatasets)
  datasets?: DatasetListDatasets[];

  /**
   * A hash value of the results page. You can use this property to determine if the page has changed since the last request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "etag" })
  etag?: string;

  /**
   * The list type. This property always returns the value "bigquery#datasetList".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * A token that can be used to request the next results page. This property is omitted on the final results page.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;
}
