import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For display only. Metadata associated with a Cloud Run revision.
 */
export declare class CloudRunRevisionInfo extends SpeakeasyBase {
    /**
     * Name of a Cloud Run revision.
     */
    displayName?: string;
    /**
     * Location in which this revision is deployed.
     */
    location?: string;
    /**
     * URI of Cloud Run service this revision belongs to.
     */
    serviceUri?: string;
    /**
     * URI of a Cloud Run revision.
     */
    uri?: string;
}
