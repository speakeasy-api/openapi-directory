package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ImageAttachment {
    @JsonProperty("content_type")
    public String contentType;
    public ImageAttachment withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public ImageAttachment withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ImageAttachment withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public ImageAttachment withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonProperty("image_height")
    public Long imageHeight;
    public ImageAttachment withImageHeight(Long imageHeight) {
        this.imageHeight = imageHeight;
        return this;
    }
    @JsonProperty("image_width")
    public Long imageWidth;
    public ImageAttachment withImageWidth(Long imageWidth) {
        this.imageWidth = imageWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImageAttachment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("object_id")
    public Long objectId;
    public ImageAttachment withObjectId(Long objectId) {
        this.objectId = objectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public java.util.Map<String, String> parent;
    public ImageAttachment withParent(java.util.Map<String, String> parent) {
        this.parent = parent;
        return this;
    }
}