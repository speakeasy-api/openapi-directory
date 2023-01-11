import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MembershipFeatureSpecInput } from "./membershipfeaturespec";
import { FeatureResourceState } from "./featureresourcestate";
import { CommonFeatureSpec } from "./commonfeaturespec";
import { CommonFeatureState } from "./commonfeaturestate";
import { MembershipFeatureSpec } from "./membershipfeaturespec";
import { MembershipFeatureState } from "./membershipfeaturestate";
import { ScopeFeatureState } from "./scopefeaturestate";



// FeatureInput
/** 
 * Feature represents the settings and status of any Hub Feature.
**/
export class FeatureInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=membershipSpecs", elemType: MembershipFeatureSpecInput })
  membershipSpecs?: Record<string, MembershipFeatureSpecInput>;

  @SpeakeasyMetadata({ data: "json, name=resourceState" })
  resourceState?: FeatureResourceState;

  @SpeakeasyMetadata({ data: "json, name=scopeSpecs" })
  scopeSpecs?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: CommonFeatureSpec;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CommonFeatureState;
}


// Feature
/** 
 * Feature represents the settings and status of any Hub Feature.
**/
export class Feature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=membershipSpecs", elemType: MembershipFeatureSpec })
  membershipSpecs?: Record<string, MembershipFeatureSpec>;

  @SpeakeasyMetadata({ data: "json, name=membershipStates", elemType: MembershipFeatureState })
  membershipStates?: Record<string, MembershipFeatureState>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceState" })
  resourceState?: FeatureResourceState;

  @SpeakeasyMetadata({ data: "json, name=scopeSpecs" })
  scopeSpecs?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata({ data: "json, name=scopeStates", elemType: ScopeFeatureState })
  scopeStates?: Record<string, ScopeFeatureState>;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: CommonFeatureSpec;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CommonFeatureState;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
