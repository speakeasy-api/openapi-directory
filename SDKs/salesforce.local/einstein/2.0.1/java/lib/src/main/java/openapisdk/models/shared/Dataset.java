package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Dataset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available")
    public Boolean available;
    public Dataset withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Dataset withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Dataset withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelSummary")
    public LabelSummary labelSummary;
    public Dataset withLabelSummary(LabelSummary labelSummary) {
        this.labelSummary = labelSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public Dataset withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Dataset withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numOfDuplicates")
    public Integer numOfDuplicates;
    public Dataset withNumOfDuplicates(Integer numOfDuplicates) {
        this.numOfDuplicates = numOfDuplicates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public Dataset withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMsg")
    public String statusMsg;
    public Dataset withStatusMsg(String statusMsg) {
        this.statusMsg = statusMsg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalExamples")
    public Integer totalExamples;
    public Dataset withTotalExamples(Integer totalExamples) {
        this.totalExamples = totalExamples;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalLabels")
    public Integer totalLabels;
    public Dataset withTotalLabels(Integer totalLabels) {
        this.totalLabels = totalLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Dataset withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public Dataset withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}