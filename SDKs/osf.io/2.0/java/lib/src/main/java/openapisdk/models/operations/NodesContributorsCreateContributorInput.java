package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodesContributorsCreateContributorInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public NodesContributorsCreateContributorAttributesInput attributes;
    public NodesContributorsCreateContributorInput withAttributes(NodesContributorsCreateContributorAttributesInput attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("relationships")
    public NodesContributorsCreateContributorRelationshipsInput relationships;
    public NodesContributorsCreateContributorInput withRelationships(NodesContributorsCreateContributorRelationshipsInput relationships) {
        this.relationships = relationships;
        return this;
    }
}