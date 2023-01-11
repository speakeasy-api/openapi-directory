package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignFlight
 * Settings that track the planned spend and duration of a campaign.
**/
public class CampaignFlight {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plannedDates")
    public DateRange plannedDates;
    public CampaignFlight withPlannedDates(DateRange plannedDates) {
        this.plannedDates = plannedDates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plannedSpendAmountMicros")
    public String plannedSpendAmountMicros;
    public CampaignFlight withPlannedSpendAmountMicros(String plannedSpendAmountMicros) {
        this.plannedSpendAmountMicros = plannedSpendAmountMicros;
        return this;
    }
}