package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeWebTime
 * Add or update Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.
**/
public class EmployeeWebTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgeNumber")
    public String badgeNumber;
    public EmployeeWebTime withBadgeNumber(String badgeNumber) {
        this.badgeNumber = badgeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeRate")
    public Double chargeRate;
    public EmployeeWebTime withChargeRate(Double chargeRate) {
        this.chargeRate = chargeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isTimeLaborEnabled")
    public Boolean isTimeLaborEnabled;
    public EmployeeWebTime withIsTimeLaborEnabled(Boolean isTimeLaborEnabled) {
        this.isTimeLaborEnabled = isTimeLaborEnabled;
        return this;
    }
}