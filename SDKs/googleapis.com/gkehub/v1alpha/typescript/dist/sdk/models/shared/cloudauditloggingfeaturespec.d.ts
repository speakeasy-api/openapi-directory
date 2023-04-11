import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **Cloud Audit Logging**: Spec for Audit Logging Allowlisting.
 */
export declare class CloudAuditLoggingFeatureSpec extends SpeakeasyBase {
    /**
     * Service account that should be allowlisted to send the audit logs; eg cloudauditlogging@gcp-project.iam.gserviceaccount.com. These accounts must already exist, but do not need to have any permissions granted to them. The customer's entitlements will be checked prior to allowlisting (i.e. the customer must be an Anthos customer.)
     */
    allowlistedServiceAccounts?: string[];
}
