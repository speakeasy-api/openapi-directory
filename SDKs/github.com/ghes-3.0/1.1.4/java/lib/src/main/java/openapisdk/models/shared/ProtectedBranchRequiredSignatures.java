package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProtectedBranchRequiredSignatures {
    @JsonProperty("enabled")
    public Boolean enabled;
    public ProtectedBranchRequiredSignatures withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ProtectedBranchRequiredSignatures withUrl(String url) {
        this.url = url;
        return this;
    }
}