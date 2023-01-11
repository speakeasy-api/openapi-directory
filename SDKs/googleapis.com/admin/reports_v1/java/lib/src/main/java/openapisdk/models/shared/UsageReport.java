package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageReport
 * JSON template for a usage report.
**/
public class UsageReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public UsageReport withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity")
    public UsageReportEntity entity;
    public UsageReport withEntity(UsageReportEntity entity) {
        this.entity = entity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public UsageReport withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UsageReport withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public UsageReportParameters[] parameters;
    public UsageReport withParameters(UsageReportParameters[] parameters) {
        this.parameters = parameters;
        return this;
    }
}