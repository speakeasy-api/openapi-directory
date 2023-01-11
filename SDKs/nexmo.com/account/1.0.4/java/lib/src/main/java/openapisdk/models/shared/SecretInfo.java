package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SecretInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public SecretMgmtLinks links;
    public SecretInfo withLinks(SecretMgmtLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public SecretInfo withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SecretInfo withId(String id) {
        this.id = id;
        return this;
    }
}