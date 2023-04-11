import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedDomainsSettings } from "./alloweddomainssettings";
import { CorsSettings } from "./corssettings";
import { GcipSettings } from "./gcipsettings";
import { OAuthSettings } from "./oauthsettings";
import { PolicyDelegationSettings } from "./policydelegationsettings";
import { ReauthSettings } from "./reauthsettings";
/**
 * Access related settings for IAP protected apps.
 */
export declare class AccessSettings extends SpeakeasyBase {
    /**
     * Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list.
     */
    allowedDomainsSettings?: AllowedDomainsSettings;
    /**
     * Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS call to bypass authentication and authorization.
     */
    corsSettings?: CorsSettings;
    /**
     * Allows customers to configure tenant_id for GCIP instance per-app.
     */
    gcipSettings?: GcipSettings;
    /**
     * Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials.
     */
    oauthSettings?: OAuthSettings;
    /**
     * PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto.
     */
    policyDelegationSettings?: PolicyDelegationSettings;
    /**
     * Configuration for IAP reauthentication policies.
     */
    reauthSettings?: ReauthSettings;
}
