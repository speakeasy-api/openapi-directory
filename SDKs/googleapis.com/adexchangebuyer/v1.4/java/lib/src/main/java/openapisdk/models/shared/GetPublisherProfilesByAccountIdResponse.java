package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPublisherProfilesByAccountIdResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profiles")
    public PublisherProfileApiProto[] profiles;
    public GetPublisherProfilesByAccountIdResponse withProfiles(PublisherProfileApiProto[] profiles) {
        this.profiles = profiles;
        return this;
    }
}