import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CloudRunMetadata contains information from a Cloud Run deployment.
 */
export declare class CloudRunMetadata extends SpeakeasyBase {
    /**
     * Output only. The Cloud Run Revision id associated with a `Rollout`.
     */
    revision?: string;
    /**
     * Output only. The name of the Cloud Run Service that is associated with a `Rollout`. Format is projects/{project}/locations/{location}/services/{service}.
     */
    service?: string;
    /**
     * Output only. The Cloud Run Service urls that are associated with a `Rollout`.
     */
    serviceUrls?: string[];
}
