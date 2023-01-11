package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StreamObject
 * A specific stream object (e.g a specific DB table).
**/
public class StreamObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backfillJob")
    public BackfillJob backfillJob;
    public StreamObject withBackfillJob(BackfillJob backfillJob) {
        this.backfillJob = backfillJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public StreamObject withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public StreamObject withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public StreamObject withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public StreamObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceObject")
    public SourceObjectIdentifier sourceObject;
    public StreamObject withSourceObject(SourceObjectIdentifier sourceObject) {
        this.sourceObject = sourceObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public StreamObject withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}