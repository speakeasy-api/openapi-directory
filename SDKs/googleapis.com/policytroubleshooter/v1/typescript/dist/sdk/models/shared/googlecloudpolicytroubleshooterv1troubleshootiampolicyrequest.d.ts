import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicytroubleshooterV1AccessTuple } from "./googlecloudpolicytroubleshooterv1accesstuple";
/**
 * Request for TroubleshootIamPolicy.
 */
export declare class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest extends SpeakeasyBase {
    /**
     * Information about the principal, resource, and permission to check.
     */
    accessTuple?: GoogleCloudPolicytroubleshooterV1AccessTuple;
}
