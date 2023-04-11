import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1FirewallAction } from "./googlecloudrecaptchaenterprisev1firewallaction";
/**
 * A FirewallPolicy represents a single matching pattern and resulting actions to take.
 */
export declare class GoogleCloudRecaptchaenterpriseV1FirewallPolicy extends SpeakeasyBase {
    /**
     * The actions that the caller should take regarding user access. There should be at most one terminal action. A terminal action is any action that forces a response, such as AllowAction, BlockAction or SubstituteAction. Zero or more non-terminal actions such as SetHeader might be specified. A single policy can contain up to 16 actions.
     */
    actions?: GoogleCloudRecaptchaenterpriseV1FirewallAction[];
    /**
     * A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the [CEL spec](https://github.com/google/cel-spec) and its [language definition](https://github.com/google/cel-spec/blob/master/doc/langdef.md). A condition has a max length of 500 characters.
     */
    condition?: string;
    /**
     * A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters.
     */
    description?: string;
    /**
     * The resource name for the FirewallPolicy in the format "projects/{project}/firewallpolicies/{firewallpolicy}".
     */
    name?: string;
    /**
     * The path for which this policy applies, specified as a glob pattern. For more information on glob, see the [manual page](https://man7.org/linux/man-pages/man7/glob.7.html). A path has a max length of 200 characters.
     */
    path?: string;
}
