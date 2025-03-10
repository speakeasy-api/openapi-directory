/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import {
  GoogleCloudOrgpolicyV2PolicySpec,
  GoogleCloudOrgpolicyV2PolicySpecInput,
} from "./googlecloudorgpolicyv2policyspec";
import { Expose, Type } from "class-transformer";

/**
 * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
 */
export class GoogleCloudOrgpolicyV2AlternatePolicySpecInput extends SpeakeasyBase {
  /**
   * Reference to the launch that will be used while audit logging and to control the launch. Should be set only in the alternate policy.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "launch" })
  launch?: string;

  /**
   * Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "spec" })
  @Type(() => GoogleCloudOrgpolicyV2PolicySpecInput)
  spec?: GoogleCloudOrgpolicyV2PolicySpecInput;
}

/**
 * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
 */
export class GoogleCloudOrgpolicyV2AlternatePolicySpec extends SpeakeasyBase {
  /**
   * Reference to the launch that will be used while audit logging and to control the launch. Should be set only in the alternate policy.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "launch" })
  launch?: string;

  /**
   * Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "spec" })
  @Type(() => GoogleCloudOrgpolicyV2PolicySpec)
  spec?: GoogleCloudOrgpolicyV2PolicySpec;
}
