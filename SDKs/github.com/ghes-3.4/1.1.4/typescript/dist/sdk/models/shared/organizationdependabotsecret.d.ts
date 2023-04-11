import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Visibility of a secret
 */
export declare enum OrganizationDependabotSecretVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}
/**
 * Secrets for GitHub Dependabot for an organization.
 */
export declare class OrganizationDependabotSecret extends SpeakeasyBase {
    createdAt: Date;
    /**
     * The name of the secret.
     */
    name: string;
    selectedRepositoriesUrl?: string;
    updatedAt: Date;
    /**
     * Visibility of a secret
     */
    visibility: OrganizationDependabotSecretVisibilityEnum;
}
