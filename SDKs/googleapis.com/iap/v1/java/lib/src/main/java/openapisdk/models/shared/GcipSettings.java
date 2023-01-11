package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GcipSettings
 * Allows customers to configure tenant_id for GCIP instance per-app.
**/
public class GcipSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginPageUri")
    public String loginPageUri;
    public GcipSettings withLoginPageUri(String loginPageUri) {
        this.loginPageUri = loginPageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantIds")
    public String[] tenantIds;
    public GcipSettings withTenantIds(String[] tenantIds) {
        this.tenantIds = tenantIds;
        return this;
    }
}