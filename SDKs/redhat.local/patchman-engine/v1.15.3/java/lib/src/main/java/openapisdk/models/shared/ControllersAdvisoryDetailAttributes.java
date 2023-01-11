package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersAdvisoryDetailAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cves")
    public String[] cves;
    public ControllersAdvisoryDetailAttributes withCves(String[] cves) {
        this.cves = cves;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ControllersAdvisoryDetailAttributes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixes")
    public String fixes;
    public ControllersAdvisoryDetailAttributes withFixes(String fixes) {
        this.fixes = fixes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_date")
    public String modifiedDate;
    public ControllersAdvisoryDetailAttributes withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public java.util.Map<String, String> packages;
    public ControllersAdvisoryDetailAttributes withPackages(java.util.Map<String, String> packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_date")
    public String publicDate;
    public ControllersAdvisoryDetailAttributes withPublicDate(String publicDate) {
        this.publicDate = publicDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public String[] references;
    public ControllersAdvisoryDetailAttributes withReferences(String[] references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public Long severity;
    public ControllersAdvisoryDetailAttributes withSeverity(Long severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solution")
    public String solution;
    public ControllersAdvisoryDetailAttributes withSolution(String solution) {
        this.solution = solution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synopsis")
    public String synopsis;
    public ControllersAdvisoryDetailAttributes withSynopsis(String synopsis) {
        this.synopsis = synopsis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public ControllersAdvisoryDetailAttributes withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}