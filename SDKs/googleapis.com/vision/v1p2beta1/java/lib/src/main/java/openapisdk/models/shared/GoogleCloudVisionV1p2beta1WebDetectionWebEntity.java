package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1WebDetectionWebEntity
 * Entity deduced from similar images on the Internet.
**/
public class GoogleCloudVisionV1p2beta1WebDetectionWebEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudVisionV1p2beta1WebDetectionWebEntity withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityId")
    public String entityId;
    public GoogleCloudVisionV1p2beta1WebDetectionWebEntity withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public GoogleCloudVisionV1p2beta1WebDetectionWebEntity withScore(Float score) {
        this.score = score;
        return this;
    }
}