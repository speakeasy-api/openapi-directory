package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AquifersFilesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public AquifersFilesList200ApplicationJsonPrivate[] private_;
    public AquifersFilesList200ApplicationJson withPrivate(AquifersFilesList200ApplicationJsonPrivate[] private_) {
        this.private_ = private_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public AquifersFilesList200ApplicationJsonPublic[] public_;
    public AquifersFilesList200ApplicationJson withPublic(AquifersFilesList200ApplicationJsonPublic[] public_) {
        this.public_ = public_;
        return this;
    }
}