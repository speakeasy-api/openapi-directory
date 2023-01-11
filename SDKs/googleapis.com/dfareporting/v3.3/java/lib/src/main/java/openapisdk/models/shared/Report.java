package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Report
 * Represents a Report resource.
**/
public class Report {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Report withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criteria")
    public ReportCriteria criteria;
    public Report withCriteria(ReportCriteria criteria) {
        this.criteria = criteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crossDimensionReachCriteria")
    public ReportCrossDimensionReachCriteria crossDimensionReachCriteria;
    public Report withCrossDimensionReachCriteria(ReportCrossDimensionReachCriteria crossDimensionReachCriteria) {
        this.crossDimensionReachCriteria = crossDimensionReachCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivery")
    public ReportDelivery delivery;
    public Report withDelivery(ReportDelivery delivery) {
        this.delivery = delivery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Report withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public Report withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightCriteria")
    public ReportFloodlightCriteria floodlightCriteria;
    public Report withFloodlightCriteria(ReportFloodlightCriteria floodlightCriteria) {
        this.floodlightCriteria = floodlightCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public ReportFormatEnum format;
    public Report withFormat(ReportFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Report withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Report withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedTime")
    public String lastModifiedTime;
    public Report withLastModifiedTime(String lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Report withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerProfileId")
    public String ownerProfileId;
    public Report withOwnerProfileId(String ownerProfileId) {
        this.ownerProfileId = ownerProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathToConversionCriteria")
    public ReportPathToConversionCriteria pathToConversionCriteria;
    public Report withPathToConversionCriteria(ReportPathToConversionCriteria pathToConversionCriteria) {
        this.pathToConversionCriteria = pathToConversionCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachCriteria")
    public ReportReachCriteria reachCriteria;
    public Report withReachCriteria(ReportReachCriteria reachCriteria) {
        this.reachCriteria = reachCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public ReportSchedule schedule;
    public Report withSchedule(ReportSchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountId")
    public String subAccountId;
    public Report withSubAccountId(String subAccountId) {
        this.subAccountId = subAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ReportTypeEnum type;
    public Report withType(ReportTypeEnum type) {
        this.type = type;
        return this;
    }
}