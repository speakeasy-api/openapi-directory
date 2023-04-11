import { SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
import { Package } from "./package";
import { PackageRepository } from "./packagerepository";
import { SoftwareRecipe } from "./softwarerecipe";
/**
 * An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
 */
export declare class GuestPolicy extends SpeakeasyBase {
    /**
     * An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.
     */
    assignment?: Assignment;
    /**
     * Output only. Time this guest policy was created.
     */
    createTime?: string;
    /**
     * Description of the guest policy. Length of the description is limited to 1024 characters.
     */
    description?: string;
    /**
     * The etag for this guest policy. If this is provided on update, it must match the server's etag.
     */
    etag?: string;
    /**
     * Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`.
     */
    name?: string;
    /**
     * A list of package repositories to configure on the VM instance. This is done before any other configs are applied so they can use these repos. Package repositories are only configured if the corresponding package manager(s) are available.
     */
    packageRepositories?: PackageRepository[];
    /**
     * The software packages to be managed by this policy.
     */
    packages?: Package[];
    /**
     * A list of Recipes to install on the VM instance.
     */
    recipes?: SoftwareRecipe[];
    /**
     * Output only. Last time this guest policy was updated.
     */
    updateTime?: string;
}
/**
 * An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
 */
export declare class GuestPolicyInput extends SpeakeasyBase {
    /**
     * An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.
     */
    assignment?: Assignment;
    /**
     * Description of the guest policy. Length of the description is limited to 1024 characters.
     */
    description?: string;
    /**
     * The etag for this guest policy. If this is provided on update, it must match the server's etag.
     */
    etag?: string;
    /**
     * Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`.
     */
    name?: string;
    /**
     * A list of package repositories to configure on the VM instance. This is done before any other configs are applied so they can use these repos. Package repositories are only configured if the corresponding package manager(s) are available.
     */
    packageRepositories?: PackageRepository[];
    /**
     * The software packages to be managed by this policy.
     */
    packages?: Package[];
    /**
     * A list of Recipes to install on the VM instance.
     */
    recipes?: SoftwareRecipe[];
}
