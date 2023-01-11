package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SecretRole {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SecretRole withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public SecretRole withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SecretRole withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret_count")
    public Long secretCount;
    public SecretRole withSecretCount(Long secretCount) {
        this.secretCount = secretCount;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public SecretRole withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}