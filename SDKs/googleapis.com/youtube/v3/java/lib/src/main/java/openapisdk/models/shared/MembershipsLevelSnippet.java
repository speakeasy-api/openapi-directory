package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MembershipsLevelSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorChannelId")
    public String creatorChannelId;
    public MembershipsLevelSnippet withCreatorChannelId(String creatorChannelId) {
        this.creatorChannelId = creatorChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("levelDetails")
    public LevelDetails levelDetails;
    public MembershipsLevelSnippet withLevelDetails(LevelDetails levelDetails) {
        this.levelDetails = levelDetails;
        return this;
    }
}