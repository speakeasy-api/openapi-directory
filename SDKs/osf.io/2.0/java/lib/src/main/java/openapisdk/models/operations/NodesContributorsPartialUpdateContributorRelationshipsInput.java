package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NodesContributorsPartialUpdateContributorRelationshipsInput
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
**/
public class NodesContributorsPartialUpdateContributorRelationshipsInput {
    @JsonProperty("user")
    public String user;
    public NodesContributorsPartialUpdateContributorRelationshipsInput withUser(String user) {
        this.user = user;
        return this;
    }
}