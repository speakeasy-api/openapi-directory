import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Custom content configuration for access denied page. IAP allows customers to define a custom URI to use as the error page when access is denied to users. If IAP prevents access to this page, the default IAP error page will be displayed instead.
 */
export declare class AccessDeniedPageSettings extends SpeakeasyBase {
    /**
     * The URI to be redirected to when access is denied.
     */
    accessDeniedPageUri?: string;
    /**
     * Whether to generate a troubleshooting URL on access denied events to this application.
     */
    generateTroubleshootingUri?: boolean;
    /**
     * Whether to generate remediation token on access denied events to this application.
     */
    remediationTokenGenerationEnabled?: boolean;
}
