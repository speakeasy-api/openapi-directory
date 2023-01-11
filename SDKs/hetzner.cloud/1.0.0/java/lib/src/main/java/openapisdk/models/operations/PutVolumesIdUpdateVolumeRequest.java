package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutVolumesIdUpdateVolumeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public PutVolumesIdUpdateVolumeRequestLabels labels;
    public PutVolumesIdUpdateVolumeRequest withLabels(PutVolumesIdUpdateVolumeRequestLabels labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutVolumesIdUpdateVolumeRequest withName(String name) {
        this.name = name;
        return this;
    }
}