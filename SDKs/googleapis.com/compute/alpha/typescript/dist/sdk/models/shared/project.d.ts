import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Quota } from "./quota";
import { UsageExportLocation } from "./usageexportlocation";
/**
 * This signifies the default network tier used for configuring resources of the project and can only take the following values: PREMIUM, STANDARD. Initially the default network tier is PREMIUM.
 */
export declare enum ProjectDefaultNetworkTierEnum {
    FixedStandard = "FIXED_STANDARD",
    Premium = "PREMIUM",
    Select = "SELECT",
    Standard = "STANDARD",
    StandardOverridesFixedStandard = "STANDARD_OVERRIDES_FIXED_STANDARD"
}
/**
 * [Output Only] Default internal DNS setting used by VMs running in this project.
 */
export declare enum ProjectVmDnsSettingEnum {
    GlobalDefault = "GLOBAL_DEFAULT",
    UnspecifiedVmDnsSetting = "UNSPECIFIED_VM_DNS_SETTING",
    ZonalDefault = "ZONAL_DEFAULT",
    ZonalOnly = "ZONAL_ONLY"
}
/**
 * [Output Only] The role this project has in a shared VPC configuration. Currently, only projects with the host role, which is specified by the value HOST, are differentiated.
 */
export declare enum ProjectXpnProjectStatusEnum {
    Host = "HOST",
    UnspecifiedXpnProjectStatus = "UNSPECIFIED_XPN_PROJECT_STATUS"
}
/**
 * Represents a Project resource. A project is used to organize resources in a Google Cloud Platform environment. For more information, read about the Resource Hierarchy.
 */
export declare class Project extends SpeakeasyBase {
    /**
     * A metadata key/value entry.
     */
    commonInstanceMetadata?: Metadata;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * This signifies the default network tier used for configuring resources of the project and can only take the following values: PREMIUM, STANDARD. Initially the default network tier is PREMIUM.
     */
    defaultNetworkTier?: ProjectDefaultNetworkTierEnum;
    /**
     * [Output Only] Default service account used by VMs running in this project.
     */
    defaultServiceAccount?: string;
    /**
     * An optional textual description of the resource.
     */
    description?: string;
    /**
     * Restricted features enabled for use on this project.
     */
    enabledFeatures?: string[];
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server. This is *not* the project ID, and is just a unique ID used by Compute Engine to identify resources.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#project for projects.
     */
    kind?: string;
    /**
     * The project ID. For example: my-example-project. Use the project ID to make requests to Compute Engine.
     */
    name?: string;
    /**
     * [Output Only] Quotas assigned to this project.
     */
    quotas?: Quota[];
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * The location in Cloud Storage and naming method of the daily usage report. Contains bucket_name and report_name prefix.
     */
    usageExportLocation?: UsageExportLocation;
    /**
     * [Output Only] Default internal DNS setting used by VMs running in this project.
     */
    vmDnsSetting?: ProjectVmDnsSettingEnum;
    /**
     * [Output Only] The role this project has in a shared VPC configuration. Currently, only projects with the host role, which is specified by the value HOST, are differentiated.
     */
    xpnProjectStatus?: ProjectXpnProjectStatusEnum;
}
