import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementGitConfig } from "./configmanagementgitconfig";
import { ConfigManagementOciConfig } from "./configmanagementociconfig";
/**
 * Configuration for Config Sync
 */
export declare class ConfigManagementConfigSync extends SpeakeasyBase {
    /**
     * Set to true to allow the vertical scaling. Defaults to false which disallows vertical scaling. This field is deprecated.
     */
    allowVerticalScale?: boolean;
    /**
     * Enables the installation of ConfigSync. If set to true, ConfigSync resources will be created and the other ConfigSync fields will be applied if exist. If set to false, all other ConfigSync fields will be ignored, ConfigSync resources will be deleted. If omitted, ConfigSync resources will be managed depends on the presence of git field.
     */
    enabled?: boolean;
    /**
     * Git repo configuration for a single cluster.
     */
    git?: ConfigManagementGitConfig;
    /**
     * OCI repo configuration for a single cluster
     */
    oci?: ConfigManagementOciConfig;
    /**
     * Set to true to enable the Config Sync admission webhook to prevent drifts. If set to `false`, disables the Config Sync admission webhook and does not prevent drifts.
     */
    preventDrift?: boolean;
    /**
     * Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.
     */
    sourceFormat?: string;
}
