package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EndpointFollowArtistsUsersRequestBody {
    @JsonProperty("ids")
    public String[] ids;
    public EndpointFollowArtistsUsersRequestBody withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}