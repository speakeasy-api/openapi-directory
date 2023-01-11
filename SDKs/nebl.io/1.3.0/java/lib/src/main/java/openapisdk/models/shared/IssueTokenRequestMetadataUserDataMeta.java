package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IssueTokenRequestMetadataUserDataMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public IssueTokenRequestMetadataUserDataMeta withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public IssueTokenRequestMetadataUserDataMeta withValue(String value) {
        this.value = value;
        return this;
    }
}