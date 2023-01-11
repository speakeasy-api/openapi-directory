package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ApiUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endsAt")
    public OffsetDateTime endsAt;
    public ApiUsage withEndsAt(OffsetDateTime endsAt) {
        this.endsAt = endsAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ApiUsage withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenseId")
    public String licenseId;
    public ApiUsage withLicenseId(String licenseId) {
        this.licenseId = licenseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public ApiUsage withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationId")
    public String organizationId;
    public ApiUsage withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planData")
    public PlanData[] planData;
    public ApiUsage withPlanData(PlanData[] planData) {
        this.planData = planData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictionsMax")
    public Long predictionsMax;
    public ApiUsage withPredictionsMax(Long predictionsMax) {
        this.predictionsMax = predictionsMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predictionsUsed")
    public Long predictionsUsed;
    public ApiUsage withPredictionsUsed(Long predictionsUsed) {
        this.predictionsUsed = predictionsUsed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startsAt")
    public OffsetDateTime startsAt;
    public ApiUsage withStartsAt(OffsetDateTime startsAt) {
        this.startsAt = startsAt;
        return this;
    }
}