/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelPermission } from "./googleappsdrivelabelsv2betalabelpermission";
import { Expose, Type } from "class-transformer";

/**
 * Response for updating one or more Label Permissions.
 */
export class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse extends SpeakeasyBase {
  /**
   * Required. Permissions updated.
   */
  @SpeakeasyMetadata({ elemType: GoogleAppsDriveLabelsV2betaLabelPermission })
  @Expose({ name: "permissions" })
  @Type(() => GoogleAppsDriveLabelsV2betaLabelPermission)
  permissions?: GoogleAppsDriveLabelsV2betaLabelPermission[];
}
