package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseSettingsEnterpriseLdapReconciliation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org")
    public String org;
    public EnterpriseSettingsEnterpriseLdapReconciliation withOrg(String org) {
        this.org = org;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public EnterpriseSettingsEnterpriseLdapReconciliation withUser(String user) {
        this.user = user;
        return this;
    }
}