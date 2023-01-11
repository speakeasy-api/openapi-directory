package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResourceImageInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageFileData")
    public String imageFileData;
    public ResourceImageInputModel withImageFileData(String imageFileData) {
        this.imageFileData = imageFileData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageFileName")
    public String imageFileName;
    public ResourceImageInputModel withImageFileName(String imageFileName) {
        this.imageFileName = imageFileName;
        return this;
    }
}