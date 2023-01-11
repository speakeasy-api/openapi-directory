package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminSyncLdapMappingForUser201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public EnterpriseAdminSyncLdapMappingForUser201ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}