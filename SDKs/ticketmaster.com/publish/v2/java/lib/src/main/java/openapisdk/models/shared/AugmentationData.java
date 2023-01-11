package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AugmentationData
 * This class defines the Augmentation Data on the Publish API
**/
public class AugmentationData {
    @JsonProperty("changes")
    public Change[] changes;
    public AugmentationData withChanges(Change[] changes) {
        this.changes = changes;
        return this;
    }
    @JsonProperty("relatedEntityId")
    public String relatedEntityId;
    public AugmentationData withRelatedEntityId(String relatedEntityId) {
        this.relatedEntityId = relatedEntityId;
        return this;
    }
    @JsonProperty("relatedEntityType")
    public AugmentationDataRelatedEntityTypeEnum relatedEntityType;
    public AugmentationData withRelatedEntityType(AugmentationDataRelatedEntityTypeEnum relatedEntityType) {
        this.relatedEntityType = relatedEntityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public AugmentationData withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonProperty("source")
    public String source;
    public AugmentationData withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonProperty("versionNumber")
    public Long versionNumber;
    public AugmentationData withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}