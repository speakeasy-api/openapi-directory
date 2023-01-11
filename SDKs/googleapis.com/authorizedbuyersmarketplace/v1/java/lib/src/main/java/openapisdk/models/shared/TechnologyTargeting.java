package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TechnologyTargeting
 * Represents targeting about various types of technology.
**/
public class TechnologyTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceCapabilityTargeting")
    public CriteriaTargeting deviceCapabilityTargeting;
    public TechnologyTargeting withDeviceCapabilityTargeting(CriteriaTargeting deviceCapabilityTargeting) {
        this.deviceCapabilityTargeting = deviceCapabilityTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceCategoryTargeting")
    public CriteriaTargeting deviceCategoryTargeting;
    public TechnologyTargeting withDeviceCategoryTargeting(CriteriaTargeting deviceCategoryTargeting) {
        this.deviceCategoryTargeting = deviceCategoryTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystemTargeting")
    public OperatingSystemTargeting operatingSystemTargeting;
    public TechnologyTargeting withOperatingSystemTargeting(OperatingSystemTargeting operatingSystemTargeting) {
        this.operatingSystemTargeting = operatingSystemTargeting;
        return this;
    }
}