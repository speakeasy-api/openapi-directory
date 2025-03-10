/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse } from "./googleappsdrivelabelsv2deltaupdatelabelresponsecreatefieldresponse";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse } from "./googleappsdrivelabelsv2deltaupdatelabelresponsecreateselectionchoiceresponse";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse } from "./googleappsdrivelabelsv2deltaupdatelabelresponseupdatefieldpropertiesresponse";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse } from "./googleappsdrivelabelsv2deltaupdatelabelresponseupdateselectionchoicepropertiesresponse";
import { Expose, Type } from "class-transformer";

/**
 * A single response from an update.
 */
export class GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse extends SpeakeasyBase {
  /**
   * Response following Field create.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createField" })
  @Type(
    () => GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse
  )
  createField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse;

  /**
   * Response following Selection Choice create.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createSelectionChoice" })
  @Type(
    () =>
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse
  )
  createSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse;

  /**
   * Response following Field delete.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deleteField" })
  deleteField?: Record<string, any>;

  /**
   * Response following Choice delete.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deleteSelectionChoice" })
  deleteSelectionChoice?: Record<string, any>;

  /**
   * Response following Field disable.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "disableField" })
  disableField?: Record<string, any>;

  /**
   * Response following Choice disable.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "disableSelectionChoice" })
  disableSelectionChoice?: Record<string, any>;

  /**
   * Response following Field enable.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "enableField" })
  enableField?: Record<string, any>;

  /**
   * Response following Choice enable.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "enableSelectionChoice" })
  enableSelectionChoice?: Record<string, any>;

  /**
   * Response following update to Field properties.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updateField" })
  @Type(
    () =>
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse
  )
  updateField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse;

  /**
   * Response following update to Field type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updateFieldType" })
  updateFieldType?: Record<string, any>;

  /**
   * Response following update to Label properties.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updateLabel" })
  updateLabel?: Record<string, any>;

  /**
   * Response following update to Selection Choice properties.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updateSelectionChoiceProperties" })
  @Type(
    () =>
      GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse
  )
  updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse;
}
