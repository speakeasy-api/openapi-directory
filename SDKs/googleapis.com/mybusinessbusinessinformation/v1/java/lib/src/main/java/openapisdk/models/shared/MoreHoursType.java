package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MoreHoursType
 * More hours types that a business can offers, in addition to its regular hours.
**/
public class MoreHoursType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public MoreHoursType withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hoursTypeId")
    public String hoursTypeId;
    public MoreHoursType withHoursTypeId(String hoursTypeId) {
        this.hoursTypeId = hoursTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizedDisplayName")
    public String localizedDisplayName;
    public MoreHoursType withLocalizedDisplayName(String localizedDisplayName) {
        this.localizedDisplayName = localizedDisplayName;
        return this;
    }
}