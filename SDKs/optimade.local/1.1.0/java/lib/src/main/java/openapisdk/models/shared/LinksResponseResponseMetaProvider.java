package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinksResponseResponseMetaProvider
 * Information on the database provider of the implementation.
**/
public class LinksResponseResponseMetaProvider {
    @JsonProperty("description")
    public String description;
    public LinksResponseResponseMetaProvider withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homepage")
    public Object homepage;
    public LinksResponseResponseMetaProvider withHomepage(Object homepage) {
        this.homepage = homepage;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public LinksResponseResponseMetaProvider withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("prefix")
    public String prefix;
    public LinksResponseResponseMetaProvider withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}