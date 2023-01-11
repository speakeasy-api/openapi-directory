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
 * Experiment
 * JSON template for Analytics experiment resource.
**/
public class Experiment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Experiment withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Experiment withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Experiment withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editableInGaUi")
    public Boolean editableInGaUi;
    public Experiment withEditableInGaUi(Boolean editableInGaUi) {
        this.editableInGaUi = editableInGaUi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public Experiment withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equalWeighting")
    public Boolean equalWeighting;
    public Experiment withEqualWeighting(Boolean equalWeighting) {
        this.equalWeighting = equalWeighting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Experiment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalWebPropertyId")
    public String internalWebPropertyId;
    public Experiment withInternalWebPropertyId(String internalWebPropertyId) {
        this.internalWebPropertyId = internalWebPropertyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Experiment withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumExperimentLengthInDays")
    public Integer minimumExperimentLengthInDays;
    public Experiment withMinimumExperimentLengthInDays(Integer minimumExperimentLengthInDays) {
        this.minimumExperimentLengthInDays = minimumExperimentLengthInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Experiment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectiveMetric")
    public String objectiveMetric;
    public Experiment withObjectiveMetric(String objectiveMetric) {
        this.objectiveMetric = objectiveMetric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optimizationType")
    public String optimizationType;
    public Experiment withOptimizationType(String optimizationType) {
        this.optimizationType = optimizationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentLink")
    public ExperimentParentLink parentLink;
    public Experiment withParentLink(ExperimentParentLink parentLink) {
        this.parentLink = parentLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileId")
    public String profileId;
    public Experiment withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonExperimentEnded")
    public String reasonExperimentEnded;
    public Experiment withReasonExperimentEnded(String reasonExperimentEnded) {
        this.reasonExperimentEnded = reasonExperimentEnded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rewriteVariationUrlsAsOriginal")
    public Boolean rewriteVariationUrlsAsOriginal;
    public Experiment withRewriteVariationUrlsAsOriginal(Boolean rewriteVariationUrlsAsOriginal) {
        this.rewriteVariationUrlsAsOriginal = rewriteVariationUrlsAsOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Experiment withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servingFramework")
    public String servingFramework;
    public Experiment withServingFramework(String servingFramework) {
        this.servingFramework = servingFramework;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public String snippet;
    public Experiment withSnippet(String snippet) {
        this.snippet = snippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public Experiment withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Experiment withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficCoverage")
    public Double trafficCoverage;
    public Experiment withTrafficCoverage(Double trafficCoverage) {
        this.trafficCoverage = trafficCoverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public Experiment withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variations")
    public ExperimentVariations[] variations;
    public Experiment withVariations(ExperimentVariations[] variations) {
        this.variations = variations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyId")
    public String webPropertyId;
    public Experiment withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("winnerConfidenceLevel")
    public Double winnerConfidenceLevel;
    public Experiment withWinnerConfidenceLevel(Double winnerConfidenceLevel) {
        this.winnerConfidenceLevel = winnerConfidenceLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("winnerFound")
    public Boolean winnerFound;
    public Experiment withWinnerFound(Boolean winnerFound) {
        this.winnerFound = winnerFound;
        return this;
    }
}