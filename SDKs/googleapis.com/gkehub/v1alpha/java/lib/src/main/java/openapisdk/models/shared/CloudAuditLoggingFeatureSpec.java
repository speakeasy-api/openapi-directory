package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudAuditLoggingFeatureSpec
 * **Cloud Audit Logging**: Spec for Audit Logging Allowlisting.
**/
public class CloudAuditLoggingFeatureSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowlistedServiceAccounts")
    public String[] allowlistedServiceAccounts;
    public CloudAuditLoggingFeatureSpec withAllowlistedServiceAccounts(String[] allowlistedServiceAccounts) {
        this.allowlistedServiceAccounts = allowlistedServiceAccounts;
        return this;
    }
}