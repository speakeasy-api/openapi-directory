package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DrillersFilesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public DrillersFilesList200ApplicationJsonPrivate[] private_;
    public DrillersFilesList200ApplicationJson withPrivate(DrillersFilesList200ApplicationJsonPrivate[] private_) {
        this.private_ = private_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public DrillersFilesList200ApplicationJsonPublic[] public_;
    public DrillersFilesList200ApplicationJson withPublic(DrillersFilesList200ApplicationJsonPublic[] public_) {
        this.public_ = public_;
        return this;
    }
}