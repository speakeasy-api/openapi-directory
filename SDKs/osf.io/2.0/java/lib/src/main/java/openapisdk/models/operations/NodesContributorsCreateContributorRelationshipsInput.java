package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NodesContributorsCreateContributorRelationshipsInput
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
**/
public class NodesContributorsCreateContributorRelationshipsInput {
    @JsonProperty("user")
    public String user;
    public NodesContributorsCreateContributorRelationshipsInput withUser(String user) {
        this.user = user;
        return this;
    }
}