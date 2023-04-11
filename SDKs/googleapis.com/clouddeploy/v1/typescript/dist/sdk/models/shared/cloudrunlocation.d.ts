import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information specifying where to deploy a Cloud Run Service.
 */
export declare class CloudRunLocation extends SpeakeasyBase {
    /**
     * Required. The location for the Cloud Run Service. Format must be `projects/{project}/locations/{location}`.
     */
    location?: string;
}
