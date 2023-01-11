package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndpointTransferAUsersPlaybackRequestBody {
    @JsonProperty("device_ids")
    public String[] deviceIds;
    public EndpointTransferAUsersPlaybackRequestBody withDeviceIds(String[] deviceIds) {
        this.deviceIds = deviceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("play")
    public Boolean play;
    public EndpointTransferAUsersPlaybackRequestBody withPlay(Boolean play) {
        this.play = play;
        return this;
    }
}