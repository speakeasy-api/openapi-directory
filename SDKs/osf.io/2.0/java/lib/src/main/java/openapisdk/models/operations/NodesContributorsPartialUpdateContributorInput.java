package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodesContributorsPartialUpdateContributorInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public NodesContributorsPartialUpdateContributorAttributesInput attributes;
    public NodesContributorsPartialUpdateContributorInput withAttributes(NodesContributorsPartialUpdateContributorAttributesInput attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("relationships")
    public NodesContributorsPartialUpdateContributorRelationshipsInput relationships;
    public NodesContributorsPartialUpdateContributorInput withRelationships(NodesContributorsPartialUpdateContributorRelationshipsInput relationships) {
        this.relationships = relationships;
        return this;
    }
}