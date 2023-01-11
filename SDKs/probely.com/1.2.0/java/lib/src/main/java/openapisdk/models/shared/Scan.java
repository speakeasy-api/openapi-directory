package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Scan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("changed")
    public OffsetDateTime changed;
    public Scan withChanged(OffsetDateTime changed) {
        this.changed = changed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changed_by")
    public ChangedBy changedBy;
    public Scan withChangedBy(ChangedBy changedBy) {
        this.changedBy = changedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completed")
    public OffsetDateTime completed;
    public Scan withCompleted(OffsetDateTime completed) {
        this.completed = completed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crawler")
    public ScanCrawler crawler;
    public Scan withCrawler(ScanCrawler crawler) {
        this.crawler = crawler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Scan withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public CreatedBy createdBy;
    public Scan withCreatedBy(CreatedBy createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprinter")
    public ScanFingerprinter fingerprinter;
    public Scan withFingerprinter(ScanFingerprinter fingerprinter) {
        this.fingerprinter = fingerprinter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highs")
    public Long highs;
    public Scan withHighs(Long highs) {
        this.highs = highs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Scan withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lows")
    public Long lows;
    public Scan withLows(Long lows) {
        this.lows = lows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediums")
    public Long mediums;
    public Scan withMediums(Long mediums) {
        this.mediums = mediums;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scan_profile")
    public ScanProfileEnum scanProfile;
    public Scan withScanProfile(ScanProfileEnum scanProfile) {
        this.scanProfile = scanProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scanner")
    public ScanScanner scanner;
    public Scan withScanner(ScanScanner scanner) {
        this.scanner = scanner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("started")
    public OffsetDateTime started;
    public Scan withStarted(OffsetDateTime started) {
        this.started = started;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ScanStatusEnum status;
    public Scan withStatus(ScanStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public TargetSimple target;
    public Scan withTarget(TargetSimple target) {
        this.target = target;
        return this;
    }
}