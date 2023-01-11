package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ProjectParameterDetails {
    @JsonProperty("average")
    public Double average;
    public ProjectParameterDetails withAverage(Double average) {
        this.average = average;
        return this;
    }
    @JsonProperty("count")
    public Long count;
    public ProjectParameterDetails withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ProjectParameterDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("firstUpdated")
    public OffsetDateTime firstUpdated;
    public ProjectParameterDetails withFirstUpdated(OffsetDateTime firstUpdated) {
        this.firstUpdated = firstUpdated;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public ProjectParameterDetails withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonProperty("lastValue")
    public Double lastValue;
    public ProjectParameterDetails withLastValue(Double lastValue) {
        this.lastValue = lastValue;
        return this;
    }
    @JsonProperty("locations")
    public Long locations;
    public ProjectParameterDetails withLocations(Long locations) {
        this.locations = locations;
        return this;
    }
    @JsonProperty("parameter")
    public String parameter;
    public ProjectParameterDetails withParameter(String parameter) {
        this.parameter = parameter;
        return this;
    }
    @JsonProperty("parameterId")
    public Long parameterId;
    public ProjectParameterDetails withParameterId(Long parameterId) {
        this.parameterId = parameterId;
        return this;
    }
    @JsonProperty("unit")
    public String unit;
    public ProjectParameterDetails withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}