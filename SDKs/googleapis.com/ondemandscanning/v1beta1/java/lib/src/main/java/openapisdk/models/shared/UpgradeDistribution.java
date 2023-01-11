package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpgradeDistribution
 * The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.
**/
public class UpgradeDistribution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification")
    public String classification;
    public UpgradeDistribution withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpeUri")
    public String cpeUri;
    public UpgradeDistribution withCpeUri(String cpeUri) {
        this.cpeUri = cpeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cve")
    public String[] cve;
    public UpgradeDistribution withCve(String[] cve) {
        this.cve = cve;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public String severity;
    public UpgradeDistribution withSeverity(String severity) {
        this.severity = severity;
        return this;
    }
}