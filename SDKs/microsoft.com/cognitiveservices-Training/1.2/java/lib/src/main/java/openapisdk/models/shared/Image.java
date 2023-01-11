package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Image
 * Image model to be sent as JSON
**/
public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Created")
    public OffsetDateTime created;
    public Image withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Height")
    public Integer height;
    public Image withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public Image withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageUri")
    public String imageUri;
    public Image withImageUri(String imageUri) {
        this.imageUri = imageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Predictions")
    public PredictionTag[] predictions;
    public Image withPredictions(PredictionTag[] predictions) {
        this.predictions = predictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public ImageTag[] tags;
    public Image withTags(ImageTag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThumbnailUri")
    public String thumbnailUri;
    public Image withThumbnailUri(String thumbnailUri) {
        this.thumbnailUri = thumbnailUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Width")
    public Integer width;
    public Image withWidth(Integer width) {
        this.width = width;
        return this;
    }
}