package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CredentialOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acl")
    public java.util.Map<String, Object> acl;
    public CredentialOptions withAcl(java.util.Map<String, Object> acl) {
        this.acl = acl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidrs")
    public String cidrs;
    public CredentialOptions withCidrs(String cidrs) {
        this.cidrs = cidrs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global")
    public Boolean global;
    public CredentialOptions withGlobal(Boolean global) {
        this.global = global;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CredentialOptions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public java.util.Map<String, Object> secret;
    public CredentialOptions withSecret(java.util.Map<String, Object> secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CredentialOptionsTypeEnum type;
    public CredentialOptions withType(CredentialOptionsTypeEnum type) {
        this.type = type;
        return this;
    }
}