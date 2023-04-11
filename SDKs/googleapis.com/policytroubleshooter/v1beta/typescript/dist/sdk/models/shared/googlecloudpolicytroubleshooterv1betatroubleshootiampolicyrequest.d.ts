import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicytroubleshooterV1betaAccessTuple } from "./googlecloudpolicytroubleshooterv1betaaccesstuple";
/**
 * Request for TroubleshootIamPolicy.
 */
export declare class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest extends SpeakeasyBase {
    /**
     * Information about the member, resource, and permission to check.
     */
    accessTuple?: GoogleCloudPolicytroubleshooterV1betaAccessTuple;
}
