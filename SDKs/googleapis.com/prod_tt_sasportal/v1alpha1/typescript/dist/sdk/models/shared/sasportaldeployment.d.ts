import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Deployment.
 */
export declare class SasPortalDeployment extends SpeakeasyBase {
    /**
     * The deployment's display name.
     */
    displayName?: string;
    /**
     * Output only. The FCC Registration Numbers (FRNs) copied from its direct parent.
     */
    frns?: string[];
    /**
     * Output only. Resource name.
     */
    name?: string;
    /**
     * User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID.
     */
    sasUserIds?: string[];
}
/**
 * The Deployment.
 */
export declare class SasPortalDeploymentInput extends SpeakeasyBase {
    /**
     * The deployment's display name.
     */
    displayName?: string;
    /**
     * User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID.
     */
    sasUserIds?: string[];
}
