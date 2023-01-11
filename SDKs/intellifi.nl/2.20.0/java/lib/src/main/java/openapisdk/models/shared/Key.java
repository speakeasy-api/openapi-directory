package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Key {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Key withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_read_only")
    public Boolean isReadOnly;
    public Key withIsReadOnly(Boolean isReadOnly) {
        this.isReadOnly = isReadOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public Key withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public Key withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_created")
    public String timeCreated;
    public Key withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_updated")
    public String timeUpdated;
    public Key withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Key withUrl(String url) {
        this.url = url;
        return this;
    }
}