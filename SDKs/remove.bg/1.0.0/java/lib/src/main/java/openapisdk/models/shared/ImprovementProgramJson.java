package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class ImprovementProgramJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_file_b64")
@SpeakeasyMetadata("form:name=image_file_b64")
    public String imageFileB64;
    public ImprovementProgramJson withImageFileB64(String imageFileB64) {
        this.imageFileB64 = imageFileB64;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_filename")
@SpeakeasyMetadata("form:name=image_filename")
    public String imageFilename;
    public ImprovementProgramJson withImageFilename(String imageFilename) {
        this.imageFilename = imageFilename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_url")
@SpeakeasyMetadata("form:name=image_url")
    public String imageUrl;
    public ImprovementProgramJson withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
@SpeakeasyMetadata("form:name=tag")
    public String tag;
    public ImprovementProgramJson withTag(String tag) {
        this.tag = tag;
        return this;
    }
}