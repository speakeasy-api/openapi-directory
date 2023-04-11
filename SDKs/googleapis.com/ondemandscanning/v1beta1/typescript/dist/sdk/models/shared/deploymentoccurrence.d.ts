import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Platform hosting this deployment.
 */
export declare enum DeploymentOccurrencePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Gke = "GKE",
    Flex = "FLEX",
    Custom = "CUSTOM"
}
/**
 * The period during which some deployable was active in a runtime.
 */
export declare class DeploymentOccurrence extends SpeakeasyBase {
    /**
     * Address of the runtime element hosting this deployment.
     */
    address?: string;
    /**
     * Configuration used to create this deployment.
     */
    config?: string;
    /**
     * Required. Beginning of the lifetime of this deployment.
     */
    deployTime?: string;
    /**
     * Platform hosting this deployment.
     */
    platform?: DeploymentOccurrencePlatformEnum;
    /**
     * Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name.
     */
    resourceUri?: string[];
    /**
     * End of the lifetime of this deployment.
     */
    undeployTime?: string;
    /**
     * Identity of the user that triggered this deployment.
     */
    userEmail?: string;
}
