package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Finding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignee")
    public Assignee assignee;
    public Finding withAssignee(Assignee assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("changed")
    public OffsetDateTime changed;
    public Finding withChanged(OffsetDateTime changed) {
        this.changed = changed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changed_by")
    public ChangedBy changedBy;
    public Finding withChangedBy(ChangedBy changedBy) {
        this.changedBy = changedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public Finding withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cvss_score")
    public Float cvssScore;
    public Finding withCvssScore(Float cvssScore) {
        this.cvssScore = cvssScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cvss_vector")
    public String cvssVector;
    public Finding withCvssVector(String cvssVector) {
        this.cvssVector = cvssVector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definition")
    public Definition definition;
    public Finding withDefinition(Definition definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidence")
    public String evidence;
    public Finding withEvidence(String evidence) {
        this.evidence = evidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extra")
    public String extra;
    public Finding withExtra(String extra) {
        this.extra = extra;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fix")
    public String fix;
    public Finding withFix(String fix) {
        this.fix = fix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Finding withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertion_point")
    public FindingInsertionPointEnum insertionPoint;
    public Finding withInsertionPoint(FindingInsertionPointEnum insertionPoint) {
        this.insertionPoint = insertionPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public Finding withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_found")
    public OffsetDateTime lastFound;
    public Finding withLastFound(OffsetDateTime lastFound) {
        this.lastFound = lastFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public MethodEnum method;
    public Finding withMethod(MethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameter")
    public String parameter;
    public Finding withParameter(String parameter) {
        this.parameter = parameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public String params;
    public Finding withParams(String params) {
        this.params = params;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public Finding withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reporter")
    public Reporter reporter;
    public Finding withReporter(Reporter reporter) {
        this.reporter = reporter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public Requests[] requests;
    public Finding withRequests(Requests[] requests) {
        this.requests = requests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scans")
    public String[] scans;
    public Finding withScans(String[] scans) {
        this.scans = scans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public FindingSeverityEnum severity;
    public Finding withSeverity(FindingSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public FindingStateEnum state;
    public Finding withState(FindingStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public TargetSimple target;
    public Finding withTarget(TargetSimple target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Finding withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Finding withValue(String value) {
        this.value = value;
        return this;
    }
}