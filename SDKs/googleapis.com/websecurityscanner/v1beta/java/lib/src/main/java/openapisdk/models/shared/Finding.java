package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Finding
 * A Finding resource represents a vulnerability instance identified during a ScanRun.
**/
public class Finding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public Finding withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Finding withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalUrl")
    public String finalUrl;
    public Finding withFinalUrl(String finalUrl) {
        this.finalUrl = finalUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingType")
    public String findingType;
    public Finding withFindingType(String findingType) {
        this.findingType = findingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form")
    public Form form;
    public Finding withForm(Form form) {
        this.form = form;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameUrl")
    public String frameUrl;
    public Finding withFrameUrl(String frameUrl) {
        this.frameUrl = frameUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fuzzedUrl")
    public String fuzzedUrl;
    public Finding withFuzzedUrl(String fuzzedUrl) {
        this.fuzzedUrl = fuzzedUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpMethod")
    public String httpMethod;
    public Finding withHttpMethod(String httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Finding withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outdatedLibrary")
    public OutdatedLibrary outdatedLibrary;
    public Finding withOutdatedLibrary(OutdatedLibrary outdatedLibrary) {
        this.outdatedLibrary = outdatedLibrary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reproductionUrl")
    public String reproductionUrl;
    public Finding withReproductionUrl(String reproductionUrl) {
        this.reproductionUrl = reproductionUrl;
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
    @JsonProperty("trackingId")
    public String trackingId;
    public Finding withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violatingResource")
    public ViolatingResource violatingResource;
    public Finding withViolatingResource(ViolatingResource violatingResource) {
        this.violatingResource = violatingResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vulnerableHeaders")
    public VulnerableHeaders vulnerableHeaders;
    public Finding withVulnerableHeaders(VulnerableHeaders vulnerableHeaders) {
        this.vulnerableHeaders = vulnerableHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vulnerableParameters")
    public VulnerableParameters vulnerableParameters;
    public Finding withVulnerableParameters(VulnerableParameters vulnerableParameters) {
        this.vulnerableParameters = vulnerableParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xss")
    public Xss xss;
    public Finding withXss(Xss xss) {
        this.xss = xss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xxe")
    public Xxe xxe;
    public Finding withXxe(Xxe xxe) {
        this.xxe = xxe;
        return this;
    }
}