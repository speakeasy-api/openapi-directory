import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CloudRunConfig contains the Cloud Run runtime configuration.
 */
export declare class CloudRunConfig extends SpeakeasyBase {
    /**
     * Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.
     */
    automaticTrafficControl?: boolean;
}
