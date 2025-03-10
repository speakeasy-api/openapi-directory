/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FixedOrPercent } from "./fixedorpercent";
import { Expose, Type } from "class-transformer";

/**
 * The instance redistribution policy for regional managed instance groups. Valid values are: - PROACTIVE (default): The group attempts to maintain an even distribution of VM instances across zones in the region. - NONE: For non-autoscaled groups, proactive redistribution is disabled.
 */
export enum InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum {
  None = "NONE",
  Proactive = "PROACTIVE",
}

/**
 * Minimal action to be taken on an instance. Use this option to minimize disruption as much as possible or to apply a more disruptive action than is necessary. - To limit disruption as much as possible, set the minimal action to REFRESH. If your update requires a more disruptive action, Compute Engine performs the necessary action to execute the update. - To apply a more disruptive action than is strictly necessary, set the minimal action to RESTART or REPLACE. For example, Compute Engine does not need to restart a VM to change its metadata. But if your application reads instance metadata only when a VM is restarted, you can set the minimal action to RESTART in order to pick up metadata changes.
 */
export enum InstanceGroupManagerUpdatePolicyMinimalActionEnum {
  None = "NONE",
  Refresh = "REFRESH",
  Replace = "REPLACE",
  Restart = "RESTART",
}

/**
 * Most disruptive action that is allowed to be taken on an instance. You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.
 */
export enum InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum {
  None = "NONE",
  Refresh = "REFRESH",
  Replace = "REPLACE",
  Restart = "RESTART",
}

/**
 * What action should be used to replace instances. See minimal_action.REPLACE
 */
export enum InstanceGroupManagerUpdatePolicyReplacementMethodEnum {
  Recreate = "RECREATE",
  Substitute = "SUBSTITUTE",
}

/**
 * The type of update process. You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).
 */
export enum InstanceGroupManagerUpdatePolicyTypeEnum {
  Opportunistic = "OPPORTUNISTIC",
  Proactive = "PROACTIVE",
}

export class InstanceGroupManagerUpdatePolicy extends SpeakeasyBase {
  /**
   * The instance redistribution policy for regional managed instance groups. Valid values are: - PROACTIVE (default): The group attempts to maintain an even distribution of VM instances across zones in the region. - NONE: For non-autoscaled groups, proactive redistribution is disabled.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "instanceRedistributionType" })
  instanceRedistributionType?: InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum;

  /**
   * Encapsulates numeric value that can be either absolute or relative.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maxSurge" })
  @Type(() => FixedOrPercent)
  maxSurge?: FixedOrPercent;

  /**
   * Encapsulates numeric value that can be either absolute or relative.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maxUnavailable" })
  @Type(() => FixedOrPercent)
  maxUnavailable?: FixedOrPercent;

  /**
   * Minimum number of seconds to wait for after a newly created instance becomes available. This value must be from range [0, 3600].
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minReadySec" })
  minReadySec?: number;

  /**
   * Minimal action to be taken on an instance. Use this option to minimize disruption as much as possible or to apply a more disruptive action than is necessary. - To limit disruption as much as possible, set the minimal action to REFRESH. If your update requires a more disruptive action, Compute Engine performs the necessary action to execute the update. - To apply a more disruptive action than is strictly necessary, set the minimal action to RESTART or REPLACE. For example, Compute Engine does not need to restart a VM to change its metadata. But if your application reads instance metadata only when a VM is restarted, you can set the minimal action to RESTART in order to pick up metadata changes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minimalAction" })
  minimalAction?: InstanceGroupManagerUpdatePolicyMinimalActionEnum;

  /**
   * Most disruptive action that is allowed to be taken on an instance. You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "mostDisruptiveAllowedAction" })
  mostDisruptiveAllowedAction?: InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum;

  /**
   * What action should be used to replace instances. See minimal_action.REPLACE
   */
  @SpeakeasyMetadata()
  @Expose({ name: "replacementMethod" })
  replacementMethod?: InstanceGroupManagerUpdatePolicyReplacementMethodEnum;

  /**
   * The type of update process. You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: InstanceGroupManagerUpdatePolicyTypeEnum;
}
