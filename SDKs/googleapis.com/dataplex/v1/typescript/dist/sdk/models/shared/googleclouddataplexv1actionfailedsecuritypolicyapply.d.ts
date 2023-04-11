import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Failed to apply security policy to the managed resource(s) under a lake, zone or an asset. For a lake or zone resource, one or more underlying assets has a failure applying security policy to the associated managed resource.
 */
export declare class GoogleCloudDataplexV1ActionFailedSecurityPolicyApply extends SpeakeasyBase {
    /**
     * Resource name of one of the assets with failing security policy application. Populated for a lake or zone resource only.
     */
    asset?: string;
}
