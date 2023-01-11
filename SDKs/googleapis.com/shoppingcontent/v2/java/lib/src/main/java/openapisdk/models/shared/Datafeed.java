package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Datafeed
 * Datafeed configuration data.
**/
public class Datafeed {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeLanguage")
    public String attributeLanguage;
    public Datafeed withAttributeLanguage(String attributeLanguage) {
        this.attributeLanguage = attributeLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentLanguage")
    public String contentLanguage;
    public Datafeed withContentLanguage(String contentLanguage) {
        this.contentLanguage = contentLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public String contentType;
    public Datafeed withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fetchSchedule")
    public DatafeedFetchSchedule fetchSchedule;
    public Datafeed withFetchSchedule(DatafeedFetchSchedule fetchSchedule) {
        this.fetchSchedule = fetchSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public Datafeed withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public DatafeedFormat format;
    public Datafeed withFormat(DatafeedFormat format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Datafeed withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intendedDestinations")
    public String[] intendedDestinations;
    public Datafeed withIntendedDestinations(String[] intendedDestinations) {
        this.intendedDestinations = intendedDestinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Datafeed withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Datafeed withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCountry")
    public String targetCountry;
    public Datafeed withTargetCountry(String targetCountry) {
        this.targetCountry = targetCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public DatafeedTarget[] targets;
    public Datafeed withTargets(DatafeedTarget[] targets) {
        this.targets = targets;
        return this;
    }
}