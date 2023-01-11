package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HeldOrgUnit
 * The organizational unit covered by a hold. This structure is immutable.
**/
public class HeldOrgUnit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdTime")
    public String holdTime;
    public HeldOrgUnit withHoldTime(String holdTime) {
        this.holdTime = holdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgUnitId")
    public String orgUnitId;
    public HeldOrgUnit withOrgUnitId(String orgUnitId) {
        this.orgUnitId = orgUnitId;
        return this;
    }
}