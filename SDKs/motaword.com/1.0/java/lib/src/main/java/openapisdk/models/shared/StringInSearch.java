package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StringInSearch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_id")
    public Long fileId;
    public StringInSearch withFileId(Long fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internal_project_id")
    public Long internalProjectId;
    public StringInSearch withInternalProjectId(Long internalProjectId) {
        this.internalProjectId = internalProjectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_updated")
    public OffsetDateTime lastUpdated;
    public StringInSearch withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project_id")
    public Long projectId;
    public StringInSearch withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_score")
    public Float searchScore;
    public StringInSearch withSearchScore(Float searchScore) {
        this.searchScore = searchScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public StringInSearch withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public StringTranslationStateEnum status;
    public StringInSearch withStatus(StringTranslationStateEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("string_id")
    public Long stringId;
    public StringInSearch withStringId(Long stringId) {
        this.stringId = stringId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public String target;
    public StringInSearch withTarget(String target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public String[] targets;
    public StringInSearch withTargets(String[] targets) {
        this.targets = targets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tm_name")
    public String tmName;
    public StringInSearch withTmName(String tmName) {
        this.tmName = tmName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public StringInSearchTypeEnum type;
    public StringInSearch withType(StringInSearchTypeEnum type) {
        this.type = type;
        return this;
    }
}