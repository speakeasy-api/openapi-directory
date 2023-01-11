package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StructureResponseManyResponseMetaProvider
 * Information on the database provider of the implementation.
**/
public class StructureResponseManyResponseMetaProvider {
    @JsonProperty("description")
    public String description;
    public StructureResponseManyResponseMetaProvider withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public Object homepage;
    public StructureResponseManyResponseMetaProvider withHomepage(Object homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public StructureResponseManyResponseMetaProvider withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prefix")
    public String prefix;
    public StructureResponseManyResponseMetaProvider withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}