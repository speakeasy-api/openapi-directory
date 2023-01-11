package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ContinuousProject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analytics_enabled")
    public Boolean analyticsEnabled;
    public ContinuousProject withAnalyticsEnabled(Boolean analyticsEnabled) {
        this.analyticsEnabled = analyticsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_start_postedit")
    public Boolean autoStartPostedit;
    public ContinuousProject withAutoStartPostedit(Boolean autoStartPostedit) {
        this.autoStartPostedit = autoStartPostedit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ContinuousProject withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ContinuousProject withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_enabled")
    public Boolean isEnabled;
    public ContinuousProject withIsEnabled(Boolean isEnabled) {
        this.isEnabled = isEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mt_enabled")
    public Boolean mtEnabled;
    public ContinuousProject withMtEnabled(Boolean mtEnabled) {
        this.mtEnabled = mtEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ContinuousProject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postedit_enabled")
    public Boolean posteditEnabled;
    public ContinuousProject withPosteditEnabled(Boolean posteditEnabled) {
        this.posteditEnabled = posteditEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_language")
    public String sourceLanguage;
    public ContinuousProject withSourceLanguage(String sourceLanguage) {
        this.sourceLanguage = sourceLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_languages")
    public String[] targetLanguages;
    public ContinuousProject withTargetLanguages(String[] targetLanguages) {
        this.targetLanguages = targetLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ContinuousProject withType(String type) {
        this.type = type;
        return this;
    }
}