import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction } from "./googlecloudrecaptchaenterprisev1firewallactionsetheaderaction";
import { GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction } from "./googlecloudrecaptchaenterprisev1firewallactionsubstituteaction";
/**
 * An individual action. Each action represents what to do if a policy matches.
 */
export declare class GoogleCloudRecaptchaenterpriseV1FirewallAction extends SpeakeasyBase {
    /**
     * An allow action continues processing a request unimpeded.
     */
    allow?: Record<string, any>;
    /**
     * A block action serves an HTTP error code a prevents the request from hitting the backend.
     */
    block?: Record<string, any>;
    /**
     * A redirect action returns a 307 (temporary redirect) response, pointing the user to a ReCaptcha interstitial page to attach a token.
     */
    redirect?: Record<string, any>;
    /**
     * A set header action sets a header and forwards the request to the backend. This can be used to trigger custom protection implemented on the backend.
     */
    setHeader?: GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction;
    /**
     * A substitute action transparently serves a different page than the one requested.
     */
    substitute?: GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction;
}
