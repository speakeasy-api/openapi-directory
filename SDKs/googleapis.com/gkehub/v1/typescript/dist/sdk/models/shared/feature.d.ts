import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipFeatureSpec } from "./membershipfeaturespec";
import { MembershipFeatureState } from "./membershipfeaturestate";
import { FeatureResourceState } from "./featureresourcestate";
import { ScopeFeatureState } from "./scopefeaturestate";
import { CommonFeatureSpec } from "./commonfeaturespec";
import { CommonFeatureState } from "./commonfeaturestate";
import { MembershipFeatureSpecInput } from "./membershipfeaturespec";
/**
 * Feature represents the settings and status of any Hub Feature.
**/
export declare class Feature extends SpeakeasyBase {
    createTime?: string;
    deleteTime?: string;
    labels?: Record<string, string>;
    membershipSpecs?: Record<string, MembershipFeatureSpec>;
    membershipStates?: Record<string, MembershipFeatureState>;
    name?: string;
    resourceState?: FeatureResourceState;
    scopeSpecs?: Record<string, Record<string, any>>;
    scopeStates?: Record<string, ScopeFeatureState>;
    spec?: CommonFeatureSpec;
    state?: CommonFeatureState;
    updateTime?: string;
}
/**
 * Feature represents the settings and status of any Hub Feature.
**/
export declare class FeatureInput extends SpeakeasyBase {
    labels?: Record<string, string>;
    membershipSpecs?: Record<string, MembershipFeatureSpecInput>;
    resourceState?: FeatureResourceState;
    scopeSpecs?: Record<string, Record<string, any>>;
    spec?: CommonFeatureSpec;
    state?: CommonFeatureState;
}
