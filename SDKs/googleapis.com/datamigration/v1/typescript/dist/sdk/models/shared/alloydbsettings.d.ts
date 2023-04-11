import { SpeakeasyBase } from "../../../internal/utils";
import { PrimaryInstanceSettings, PrimaryInstanceSettingsInput } from "./primaryinstancesettings";
import { UserPassword, UserPasswordInput } from "./userpassword";
/**
 * Settings for creating an AlloyDB cluster.
 */
export declare class AlloyDbSettings extends SpeakeasyBase {
    /**
     * The username/password for a database user. Used for specifying initial users at cluster creation time.
     */
    initialUser?: UserPassword;
    /**
     * Labels for the AlloyDB cluster created by DMS. An object containing a list of 'key', 'value' pairs.
     */
    labels?: Record<string, string>;
    /**
     * Settings for the cluster's primary instance
     */
    primaryInstanceSettings?: PrimaryInstanceSettings;
    /**
     * Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: "projects/{project_number}/global/networks/{network_id}". This is required to create a cluster.
     */
    vpcNetwork?: string;
}
/**
 * Settings for creating an AlloyDB cluster.
 */
export declare class AlloyDbSettingsInput extends SpeakeasyBase {
    /**
     * The username/password for a database user. Used for specifying initial users at cluster creation time.
     */
    initialUser?: UserPasswordInput;
    /**
     * Labels for the AlloyDB cluster created by DMS. An object containing a list of 'key', 'value' pairs.
     */
    labels?: Record<string, string>;
    /**
     * Settings for the cluster's primary instance
     */
    primaryInstanceSettings?: PrimaryInstanceSettingsInput;
    /**
     * Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: "projects/{project_number}/global/networks/{network_id}". This is required to create a cluster.
     */
    vpcNetwork?: string;
}
