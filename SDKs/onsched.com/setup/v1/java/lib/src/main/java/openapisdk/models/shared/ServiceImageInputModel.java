package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceImageInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageFileData")
    public String imageFileData;
    public ServiceImageInputModel withImageFileData(String imageFileData) {
        this.imageFileData = imageFileData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageFileName")
    public String imageFileName;
    public ServiceImageInputModel withImageFileName(String imageFileName) {
        this.imageFileName = imageFileName;
        return this;
    }
}