package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageAttachmentInput {
    @JsonProperty("content_type")
    public String contentType;
    public ImageAttachmentInput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonProperty("image_height")
    public Long imageHeight;
    public ImageAttachmentInput withImageHeight(Long imageHeight) {
        this.imageHeight = imageHeight;
        return this;
    }
    @JsonProperty("image_width")
    public Long imageWidth;
    public ImageAttachmentInput withImageWidth(Long imageWidth) {
        this.imageWidth = imageWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImageAttachmentInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("object_id")
    public Long objectId;
    public ImageAttachmentInput withObjectId(Long objectId) {
        this.objectId = objectId;
        return this;
    }
}