/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ChartData } from "./chartdata";
import { TextFormat } from "./textformat";
import { Expose, Type } from "class-transformer";

/**
 * The placement of the data label relative to the labeled data.
 */
export enum DataLabelPlacementEnum {
  DataLabelPlacementUnspecified = "DATA_LABEL_PLACEMENT_UNSPECIFIED",
  Center = "CENTER",
  Left = "LEFT",
  Right = "RIGHT",
  Above = "ABOVE",
  Below = "BELOW",
  InsideEnd = "INSIDE_END",
  InsideBase = "INSIDE_BASE",
  OutsideEnd = "OUTSIDE_END",
}

/**
 * The type of the data label.
 */
export enum DataLabelTypeEnum {
  DataLabelTypeUnspecified = "DATA_LABEL_TYPE_UNSPECIFIED",
  None = "NONE",
  Data = "DATA",
  Custom = "CUSTOM",
}

/**
 * Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
 */
export class DataLabel extends SpeakeasyBase {
  /**
   * The data included in a domain or series.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "customLabelData" })
  @Type(() => ChartData)
  customLabelData?: ChartData;

  /**
   * The placement of the data label relative to the labeled data.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "placement" })
  placement?: DataLabelPlacementEnum;

  /**
   * The format of a run of text in a cell. Absent values indicate that the field isn't specified.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "textFormat" })
  @Type(() => TextFormat)
  textFormat?: TextFormat;

  /**
   * The type of the data label.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: DataLabelTypeEnum;
}
