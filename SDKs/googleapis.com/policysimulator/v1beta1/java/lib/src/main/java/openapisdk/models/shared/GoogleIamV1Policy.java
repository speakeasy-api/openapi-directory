package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleIamV1Policy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditConfigs")
    public GoogleIamV1AuditConfig[] auditConfigs;
    public GoogleIamV1Policy withAuditConfigs(GoogleIamV1AuditConfig[] auditConfigs) {
        this.auditConfigs = auditConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bindings")
    public GoogleIamV1Binding[] bindings;
    public GoogleIamV1Policy withBindings(GoogleIamV1Binding[] bindings) {
        this.bindings = bindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleIamV1Policy withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public GoogleIamV1Policy withVersion(Integer version) {
        this.version = version;
        return this;
    }
}