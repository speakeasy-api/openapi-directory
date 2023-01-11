package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersSystemAdvisoryItemAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advisory_type")
    public Long advisoryType;
    public ControllersSystemAdvisoryItemAttributes withAdvisoryType(Long advisoryType) {
        this.advisoryType = advisoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cve_count")
    public Long cveCount;
    public ControllersSystemAdvisoryItemAttributes withCveCount(Long cveCount) {
        this.cveCount = cveCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ControllersSystemAdvisoryItemAttributes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_date")
    public String publicDate;
    public ControllersSystemAdvisoryItemAttributes withPublicDate(String publicDate) {
        this.publicDate = publicDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public Long severity;
    public ControllersSystemAdvisoryItemAttributes withSeverity(Long severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synopsis")
    public String synopsis;
    public ControllersSystemAdvisoryItemAttributes withSynopsis(String synopsis) {
        this.synopsis = synopsis;
        return this;
    }
}