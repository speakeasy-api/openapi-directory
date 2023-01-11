package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetVolumes200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetVolumes200ApplicationJsonMeta meta;
    public GetVolumes200ApplicationJson withMeta(GetVolumes200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("volumes")
    public GetVolumes200ApplicationJsonVolumes[] volumes;
    public GetVolumes200ApplicationJson withVolumes(GetVolumes200ApplicationJsonVolumes[] volumes) {
        this.volumes = volumes;
        return this;
    }
}