package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageCreateResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Image")
    public Image image;
    public ImageCreateResult withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceUrl")
    public String sourceUrl;
    public ImageCreateResult withSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ImageCreateResultStatusEnum status;
    public ImageCreateResult withStatus(ImageCreateResultStatusEnum status) {
        this.status = status;
        return this;
    }
}