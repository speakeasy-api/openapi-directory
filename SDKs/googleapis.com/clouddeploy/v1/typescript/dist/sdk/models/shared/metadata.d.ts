import { SpeakeasyBase } from "../../../internal/utils";
import { CloudRunMetadata } from "./cloudrunmetadata";
/**
 * Metadata includes information associated with a `Rollout`.
 */
export declare class Metadata extends SpeakeasyBase {
    /**
     * CloudRunMetadata contains information from a Cloud Run deployment.
     */
    cloudRun?: CloudRunMetadata;
}
