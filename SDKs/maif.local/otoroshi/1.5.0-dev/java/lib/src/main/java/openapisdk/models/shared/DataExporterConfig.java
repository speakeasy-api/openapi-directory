package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataExporterConfig
 * Settings to export Otorshi events
**/
public class DataExporterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bufferSize")
    public Integer bufferSize;
    public DataExporterConfig withBufferSize(Integer bufferSize) {
        this.bufferSize = bufferSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public Object config;
    public DataExporterConfig withConfig(Object config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public DataExporterConfig withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public String enabled;
    public DataExporterConfig withEnabled(String enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filtering")
    public Filtering filtering;
    public DataExporterConfig withFiltering(Filtering filtering) {
        this.filtering = filtering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupDuration")
    public Long groupDuration;
    public DataExporterConfig withGroupDuration(Long groupDuration) {
        this.groupDuration = groupDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupSize")
    public Integer groupSize;
    public DataExporterConfig withGroupSize(Integer groupSize) {
        this.groupSize = groupSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DataExporterConfig withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonWorkers")
    public Integer jsonWorkers;
    public DataExporterConfig withJsonWorkers(Integer jsonWorkers) {
        this.jsonWorkers = jsonWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public DataExporterConfig withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public DataExporterConfig withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DataExporterConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projection")
    public java.util.Map<String, String> projection;
    public DataExporterConfig withProjection(java.util.Map<String, String> projection) {
        this.projection = projection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendWorkers")
    public Integer sendWorkers;
    public DataExporterConfig withSendWorkers(Integer sendWorkers) {
        this.sendWorkers = sendWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("typ")
    public DataExporterConfigTypEnum typ;
    public DataExporterConfig withTyp(DataExporterConfigTypEnum typ) {
        this.typ = typ;
        return this;
    }
}