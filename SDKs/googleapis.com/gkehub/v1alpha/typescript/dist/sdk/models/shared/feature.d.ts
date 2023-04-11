import { SpeakeasyBase } from "../../../internal/utils";
import { CommonFeatureSpec } from "./commonfeaturespec";
import { CommonFeatureState, CommonFeatureStateInput } from "./commonfeaturestate";
import { CommonFleetDefaultMemberConfigSpec, CommonFleetDefaultMemberConfigSpecInput } from "./commonfleetdefaultmemberconfigspec";
import { FeatureResourceState } from "./featureresourcestate";
import { MembershipFeatureSpec, MembershipFeatureSpecInput } from "./membershipfeaturespec";
import { MembershipFeatureState } from "./membershipfeaturestate";
import { ScopeFeatureState } from "./scopefeaturestate";
/**
 * Feature represents the settings and status of any Hub Feature.
 */
export declare class Feature extends SpeakeasyBase {
    /**
     * Output only. When the Feature resource was created.
     */
    createTime?: string;
    /**
     * Output only. When the Feature resource was deleted.
     */
    deleteTime?: string;
    /**
     * CommonFleetDefaultMemberConfigSpec contains default configuration information for memberships of a fleet
     */
    fleetDefaultMemberConfig?: CommonFleetDefaultMemberConfigSpec;
    /**
     * GCP labels for this Feature.
     */
    labels?: Record<string, string>;
    /**
     * Optional. Membership-specific configuration for this Feature. If this Feature does not support any per-Membership configuration, this field may be unused. The keys indicate which Membership the configuration is for, in the form: `projects/{p}/locations/{l}/memberships/{m}` Where {p} is the project, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} WILL match the Feature's project. {p} will always be returned as the project number, but the project ID is also accepted during input. If the same Membership is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature.
     */
    membershipSpecs?: Record<string, MembershipFeatureSpec>;
    /**
     * Output only. Membership-specific Feature status. If this Feature does report any per-Membership status, this field may be unused. The keys indicate which Membership the state is for, in the form: `projects/{p}/locations/{l}/memberships/{m}` Where {p} is the project number, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} MUST match the Feature's project number.
     */
    membershipStates?: Record<string, MembershipFeatureState>;
    /**
     * Output only. The full, unique name of this Feature resource in the format `projects/* /locations/* /features/*`.
     */
    name?: string;
    /**
     * FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the "running state" of the Feature in the Hub and across Memberships.
     */
    resourceState?: FeatureResourceState;
    /**
     * Optional. Scope-specific configuration for this Feature. If this Feature does not support any per-Scope configuration, this field may be unused. The keys indicate which Scope the configuration is for, in the form: `projects/{p}/locations/global/scopes/{s}` Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature's project. {p} will always be returned as the project number, but the project ID is also accepted during input. If the same Scope is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature.
     */
    scopeSpecs?: Record<string, Record<string, any>>;
    /**
     * Output only. Scope-specific Feature status. If this Feature does report any per-Scope status, this field may be unused. The keys indicate which Scope the state is for, in the form: `projects/{p}/locations/global/scopes/{s}` Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature's project.
     */
    scopeStates?: Record<string, ScopeFeatureState>;
    /**
     * CommonFeatureSpec contains Hub-wide configuration information
     */
    spec?: CommonFeatureSpec;
    /**
     * CommonFeatureState contains Hub-wide Feature status information.
     */
    state?: CommonFeatureState;
    /**
     * Output only. When the Feature resource was last updated.
     */
    updateTime?: string;
}
/**
 * Feature represents the settings and status of any Hub Feature.
 */
export declare class FeatureInput extends SpeakeasyBase {
    /**
     * CommonFleetDefaultMemberConfigSpec contains default configuration information for memberships of a fleet
     */
    fleetDefaultMemberConfig?: CommonFleetDefaultMemberConfigSpecInput;
    /**
     * GCP labels for this Feature.
     */
    labels?: Record<string, string>;
    /**
     * Optional. Membership-specific configuration for this Feature. If this Feature does not support any per-Membership configuration, this field may be unused. The keys indicate which Membership the configuration is for, in the form: `projects/{p}/locations/{l}/memberships/{m}` Where {p} is the project, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} WILL match the Feature's project. {p} will always be returned as the project number, but the project ID is also accepted during input. If the same Membership is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature.
     */
    membershipSpecs?: Record<string, MembershipFeatureSpecInput>;
    /**
     * FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the "running state" of the Feature in the Hub and across Memberships.
     */
    resourceState?: FeatureResourceState;
    /**
     * Optional. Scope-specific configuration for this Feature. If this Feature does not support any per-Scope configuration, this field may be unused. The keys indicate which Scope the configuration is for, in the form: `projects/{p}/locations/global/scopes/{s}` Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature's project. {p} will always be returned as the project number, but the project ID is also accepted during input. If the same Scope is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature.
     */
    scopeSpecs?: Record<string, Record<string, any>>;
    /**
     * CommonFeatureSpec contains Hub-wide configuration information
     */
    spec?: CommonFeatureSpec;
    /**
     * CommonFeatureState contains Hub-wide Feature status information.
     */
    state?: CommonFeatureStateInput;
}
