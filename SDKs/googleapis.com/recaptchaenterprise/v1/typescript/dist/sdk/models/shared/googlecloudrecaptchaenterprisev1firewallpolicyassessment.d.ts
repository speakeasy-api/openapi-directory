import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1FirewallPolicy } from "./googlecloudrecaptchaenterprisev1firewallpolicy";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * Policy config assessment.
 */
export declare class GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: GoogleRpcStatus;
    /**
     * A FirewallPolicy represents a single matching pattern and resulting actions to take.
     */
    firewallPolicy?: GoogleCloudRecaptchaenterpriseV1FirewallPolicy;
}
