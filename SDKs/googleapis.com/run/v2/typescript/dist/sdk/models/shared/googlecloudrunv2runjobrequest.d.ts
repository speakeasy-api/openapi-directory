import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message to create a new Execution of a Job.
 */
export declare class GoogleCloudRunV2RunJobRequest extends SpeakeasyBase {
    /**
     * A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     */
    etag?: string;
    /**
     * Indicates that the request should be validated without actually deleting any resources.
     */
    validateOnly?: boolean;
}
