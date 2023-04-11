import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIamV1Policy } from "./googleiamv1policy";
/**
 * The logs to use as input for the Replay.
 */
export declare enum GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum {
    LogSourceUnspecified = "LOG_SOURCE_UNSPECIFIED",
    RecentAccesses = "RECENT_ACCESSES"
}
/**
 * The configuration used for a Replay.
 */
export declare class GoogleCloudPolicysimulatorV1ReplayConfig extends SpeakeasyBase {
    /**
     * The logs to use as input for the Replay.
     */
    logSource?: GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum;
    /**
     * A mapping of the resources that you want to simulate policies for and the policies that you want to simulate. Keys are the full resource names for the resources. For example, `//cloudresourcemanager.googleapis.com/projects/my-project`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. Values are Policy objects representing the policies that you want to simulate. Replays automatically take into account any IAM policies inherited through the resource hierarchy, and any policies set on descendant resources. You do not need to include these policies in the policy overlay.
     */
    policyOverlay?: Record<string, GoogleIamV1Policy>;
}
