package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperatingSystemTargeting
 * Represents targeting information for operating systems.
**/
public class OperatingSystemTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystemCriteria")
    public CriteriaTargeting operatingSystemCriteria;
    public OperatingSystemTargeting withOperatingSystemCriteria(CriteriaTargeting operatingSystemCriteria) {
        this.operatingSystemCriteria = operatingSystemCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystemVersionCriteria")
    public CriteriaTargeting operatingSystemVersionCriteria;
    public OperatingSystemTargeting withOperatingSystemVersionCriteria(CriteriaTargeting operatingSystemVersionCriteria) {
        this.operatingSystemVersionCriteria = operatingSystemVersionCriteria;
        return this;
    }
}