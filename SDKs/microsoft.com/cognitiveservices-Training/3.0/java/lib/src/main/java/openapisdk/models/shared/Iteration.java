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
 * Iteration
 * Iteration model to be sent over JSON.
**/
public class Iteration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classificationType")
    public IterationClassificationTypeEnum classificationType;
    public Iteration withClassificationType(IterationClassificationTypeEnum classificationType) {
        this.classificationType = classificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Iteration withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainId")
    public String domainId;
    public Iteration withDomainId(String domainId) {
        this.domainId = domainId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportable")
    public Boolean exportable;
    public Iteration withExportable(Boolean exportable) {
        this.exportable = exportable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportableTo")
    public IterationExportableToEnum[] exportableTo;
    public Iteration withExportableTo(IterationExportableToEnum[] exportableTo) {
        this.exportableTo = exportableTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Iteration withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModified")
    public OffsetDateTime lastModified;
    public Iteration withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Iteration withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalPublishResourceId")
    public String originalPublishResourceId;
    public Iteration withOriginalPublishResourceId(String originalPublishResourceId) {
        this.originalPublishResourceId = originalPublishResourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public Iteration withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishName")
    public String publishName;
    public Iteration withPublishName(String publishName) {
        this.publishName = publishName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedBudgetInHours")
    public Integer reservedBudgetInHours;
    public Iteration withReservedBudgetInHours(Integer reservedBudgetInHours) {
        this.reservedBudgetInHours = reservedBudgetInHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Iteration withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("trainedAt")
    public OffsetDateTime trainedAt;
    public Iteration withTrainedAt(OffsetDateTime trainedAt) {
        this.trainedAt = trainedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trainingType")
    public IterationTrainingTypeEnum trainingType;
    public Iteration withTrainingType(IterationTrainingTypeEnum trainingType) {
        this.trainingType = trainingType;
        return this;
    }
}