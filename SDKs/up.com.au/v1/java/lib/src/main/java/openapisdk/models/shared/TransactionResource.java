package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionResource {
    @JsonProperty("attributes")
    public TransactionResourceAttributes attributes;
    public TransactionResource withAttributes(TransactionResourceAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public TransactionResource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public TransactionResourceLinks links;
    public TransactionResource withLinks(TransactionResourceLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("relationships")
    public TransactionResourceRelationships relationships;
    public TransactionResource withRelationships(TransactionResourceRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TransactionResource withType(String type) {
        this.type = type;
        return this;
    }
}