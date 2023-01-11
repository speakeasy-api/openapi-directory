package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedVrf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NestedVrf withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NestedVrf withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix_count")
    public Long prefixCount;
    public NestedVrf withPrefixCount(Long prefixCount) {
        this.prefixCount = prefixCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rd")
    public String rd;
    public NestedVrf withRd(String rd) {
        this.rd = rd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NestedVrf withUrl(String url) {
        this.url = url;
        return this;
    }
}