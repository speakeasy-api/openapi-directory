package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OpenInfo
 * Information related to the opening state of the business.
**/
public class OpenInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReopen")
    public Boolean canReopen;
    public OpenInfo withCanReopen(Boolean canReopen) {
        this.canReopen = canReopen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openingDate")
    public Date openingDate;
    public OpenInfo withOpeningDate(Date openingDate) {
        this.openingDate = openingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OpenInfoStatusEnum status;
    public OpenInfo withStatus(OpenInfoStatusEnum status) {
        this.status = status;
        return this;
    }
}