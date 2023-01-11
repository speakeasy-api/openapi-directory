package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEntitiesResponse
 * Response message for EntityService.ListEntities
**/
public class ListEntitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entities")
    public Entity[] entities;
    public ListEntitiesResponse withEntities(Entity[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListEntitiesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}