package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrgUnitInfo
 * The organizational unit to search
**/
public class OrgUnitInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgUnitId")
    public String orgUnitId;
    public OrgUnitInfo withOrgUnitId(String orgUnitId) {
        this.orgUnitId = orgUnitId;
        return this;
    }
}