package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Activity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity_at")
    public Long activityAt;
    public Activity withActivityAt(Long activityAt) {
        this.activityAt = activityAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Activity withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ActivityLinks links;
    public Activity withLinks(ActivityLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_text")
    public String sourceText;
    public Activity withSourceText(String sourceText) {
        this.sourceText = sourceText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_text")
    public String targetText;
    public Activity withTargetText(String targetText) {
        this.targetText = targetText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translator")
    public Long translator;
    public Activity withTranslator(Long translator) {
        this.translator = translator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ActivityTypeEnum type;
    public Activity withType(ActivityTypeEnum type) {
        this.type = type;
        return this;
    }
}