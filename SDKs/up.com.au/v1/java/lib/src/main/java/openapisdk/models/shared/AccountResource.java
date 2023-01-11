package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountResource
 * Provides information about an Up bank account.
 * 
**/
public class AccountResource {
    @JsonProperty("attributes")
    public AccountResourceAttributes attributes;
    public AccountResource withAttributes(AccountResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AccountResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public AccountResourceLinks links;
    public AccountResource withLinks(AccountResourceLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("relationships")
    public AccountResourceRelationships relationships;
    public AccountResource withRelationships(AccountResourceRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AccountResource withType(String type) {
        this.type = type;
        return this;
    }
}