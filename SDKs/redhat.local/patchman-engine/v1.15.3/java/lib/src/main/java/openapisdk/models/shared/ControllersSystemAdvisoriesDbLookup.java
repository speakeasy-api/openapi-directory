package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersSystemAdvisoriesDbLookup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advisory_type")
    public Long advisoryType;
    public ControllersSystemAdvisoriesDbLookup withAdvisoryType(Long advisoryType) {
        this.advisoryType = advisoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cve_count")
    public Long cveCount;
    public ControllersSystemAdvisoriesDbLookup withCveCount(Long cveCount) {
        this.cveCount = cveCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ControllersSystemAdvisoriesDbLookup withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ControllersSystemAdvisoriesDbLookup withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_date")
    public String publicDate;
    public ControllersSystemAdvisoriesDbLookup withPublicDate(String publicDate) {
        this.publicDate = publicDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public Long severity;
    public ControllersSystemAdvisoriesDbLookup withSeverity(Long severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synopsis")
    public String synopsis;
    public ControllersSystemAdvisoriesDbLookup withSynopsis(String synopsis) {
        this.synopsis = synopsis;
        return this;
    }
}