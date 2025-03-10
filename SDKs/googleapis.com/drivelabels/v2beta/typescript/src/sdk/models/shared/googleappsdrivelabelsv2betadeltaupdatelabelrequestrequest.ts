/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest";
import { Expose, Type } from "class-transformer";

/**
 * A single kind of update to apply to a Label.
 */
export class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput extends SpeakeasyBase {
  /**
   * Request to create a Field within a Label.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createField" })
  @Type(
    () =>
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput
  )
  createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput;

  /**
   * Request to create a Selection Choice.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createSelectionChoice" })
  @Type(
    () =>
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput
  )
  createSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput;

  /**
   * Request to delete the Field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deleteField" })
  @Type(
    () => GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest
  )
  deleteField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest;

  /**
   * Request to delete a Choice.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deleteSelectionChoice" })
  @Type(
    () =>
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest
  )
  deleteSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest;

  /**
   * Request to disable the Field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "disableField" })
  @Type(
    () => GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest
  )
  disableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest;

  /**
   * Request to disable a Choice.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "disableSelectionChoice" })
  @Type(
    () =>
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest
  )
  disableSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest;

  /**
   * Request to enable the Field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "enableField" })
  @Type(
    () => GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest
  )
  enableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest;

  /**
   * Request to enable a Choice.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "enableSelectionChoice" })
  @Type(
    () =>
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest
  )
  enableSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest;

  /**
   * Request to update Field properties.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updateField" })
  @Type(
    () =>
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest
  )
  updateField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest;

  /**
   * Request to change the type of a Field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updateFieldType" })
  @Type(
    () =>
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput
  )
  updateFieldType?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput;

  /**
   * Updates basic properties of a Label.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updateLabel" })
  @Type(
    () =>
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest
  )
  updateLabel?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest;

  /**
   * Request to update a Choice properties.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updateSelectionChoiceProperties" })
  @Type(
    () =>
      GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest
  )
  updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest;
}
