package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreprintsCreatePreprintInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public PreprintsCreatePreprintAttributesInput attributes;
    public PreprintsCreatePreprintInput withAttributes(PreprintsCreatePreprintAttributesInput attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("relationships")
    public PreprintsCreatePreprintRelationshipsInput relationships;
    public PreprintsCreatePreprintInput withRelationships(PreprintsCreatePreprintRelationshipsInput relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PreprintsCreatePreprintInput withType(String type) {
        this.type = type;
        return this;
    }
}