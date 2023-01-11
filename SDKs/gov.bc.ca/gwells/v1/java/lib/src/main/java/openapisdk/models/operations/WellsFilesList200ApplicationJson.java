package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WellsFilesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public WellsFilesList200ApplicationJsonPrivate[] private_;
    public WellsFilesList200ApplicationJson withPrivate(WellsFilesList200ApplicationJsonPrivate[] private_) {
        this.private_ = private_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public WellsFilesList200ApplicationJsonPublic[] public_;
    public WellsFilesList200ApplicationJson withPublic(WellsFilesList200ApplicationJsonPublic[] public_) {
        this.public_ = public_;
        return this;
    }
}