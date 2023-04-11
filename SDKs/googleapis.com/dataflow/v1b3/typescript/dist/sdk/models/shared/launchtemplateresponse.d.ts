import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Response to the request to launch a template.
 */
export declare class LaunchTemplateResponse extends SpeakeasyBase {
    /**
     * Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.
     */
    job?: Job;
}
