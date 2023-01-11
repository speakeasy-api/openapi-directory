package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FindingsMetaRisk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cvss_base_score")
    public String[] cvssBaseScore;
    public FindingsMetaRisk withCvssBaseScore(String[] cvssBaseScore) {
        this.cvssBaseScore = cvssBaseScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cvss_vector")
    public String[] cvssVector;
    public FindingsMetaRisk withCvssVector(String[] cvssVector) {
        this.cvssVector = cvssVector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exploit_available")
    public String[] exploitAvailable;
    public FindingsMetaRisk withExploitAvailable(String[] exploitAvailable) {
        this.exploitAvailable = exploitAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exploitability_ease")
    public String[] exploitabilityEase;
    public FindingsMetaRisk withExploitabilityEase(String[] exploitabilityEase) {
        this.exploitabilityEase = exploitabilityEase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patch_publication_date")
    public String[] patchPublicationDate;
    public FindingsMetaRisk withPatchPublicationDate(String[] patchPublicationDate) {
        this.patchPublicationDate = patchPublicationDate;
        return this;
    }
}