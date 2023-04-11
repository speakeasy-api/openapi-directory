import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For display only. Metadata associated with a Cloud Function.
 */
export declare class CloudFunctionInfo extends SpeakeasyBase {
    /**
     * Name of a Cloud Function.
     */
    displayName?: string;
    /**
     * Location in which the Cloud Function is deployed.
     */
    location?: string;
    /**
     * URI of a Cloud Function.
     */
    uri?: string;
    /**
     * Latest successfully deployed version id of the Cloud Function.
     */
    versionId?: string;
}
