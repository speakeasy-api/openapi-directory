package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceResponseOneResponseMetaProvider
 * Information on the database provider of the implementation.
**/
public class ReferenceResponseOneResponseMetaProvider {
    @JsonProperty("description")
    public String description;
    public ReferenceResponseOneResponseMetaProvider withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public Object homepage;
    public ReferenceResponseOneResponseMetaProvider withHomepage(Object homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ReferenceResponseOneResponseMetaProvider withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prefix")
    public String prefix;
    public ReferenceResponseOneResponseMetaProvider withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}