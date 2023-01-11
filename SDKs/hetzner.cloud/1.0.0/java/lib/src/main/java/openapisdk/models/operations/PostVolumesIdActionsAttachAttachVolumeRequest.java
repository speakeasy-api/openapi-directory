package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostVolumesIdActionsAttachAttachVolumeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automount")
    public Boolean automount;
    public PostVolumesIdActionsAttachAttachVolumeRequest withAutomount(Boolean automount) {
        this.automount = automount;
        return this;
    }
    @JsonProperty("server")
    public Long server;
    public PostVolumesIdActionsAttachAttachVolumeRequest withServer(Long server) {
        this.server = server;
        return this;
    }
}