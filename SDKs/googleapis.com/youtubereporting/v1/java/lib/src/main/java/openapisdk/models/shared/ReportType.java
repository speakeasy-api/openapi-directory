package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportType
 * A report type.
**/
public class ReportType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deprecateTime")
    public String deprecateTime;
    public ReportType withDeprecateTime(String deprecateTime) {
        this.deprecateTime = deprecateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ReportType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReportType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemManaged")
    public Boolean systemManaged;
    public ReportType withSystemManaged(Boolean systemManaged) {
        this.systemManaged = systemManaged;
        return this;
    }
}