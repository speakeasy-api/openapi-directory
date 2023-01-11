package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Housekeeping
 * Conveniences provided in guest units to facilitate an easier, more comfortable stay.
**/
public class Housekeeping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailyHousekeeping")
    public Boolean dailyHousekeeping;
    public Housekeeping withDailyHousekeeping(Boolean dailyHousekeeping) {
        this.dailyHousekeeping = dailyHousekeeping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailyHousekeepingException")
    public HousekeepingDailyHousekeepingExceptionEnum dailyHousekeepingException;
    public Housekeeping withDailyHousekeepingException(HousekeepingDailyHousekeepingExceptionEnum dailyHousekeepingException) {
        this.dailyHousekeepingException = dailyHousekeepingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("housekeepingAvailable")
    public Boolean housekeepingAvailable;
    public Housekeeping withHousekeepingAvailable(Boolean housekeepingAvailable) {
        this.housekeepingAvailable = housekeepingAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("housekeepingAvailableException")
    public HousekeepingHousekeepingAvailableExceptionEnum housekeepingAvailableException;
    public Housekeeping withHousekeepingAvailableException(HousekeepingHousekeepingAvailableExceptionEnum housekeepingAvailableException) {
        this.housekeepingAvailableException = housekeepingAvailableException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("turndownService")
    public Boolean turndownService;
    public Housekeeping withTurndownService(Boolean turndownService) {
        this.turndownService = turndownService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("turndownServiceException")
    public HousekeepingTurndownServiceExceptionEnum turndownServiceException;
    public Housekeeping withTurndownServiceException(HousekeepingTurndownServiceExceptionEnum turndownServiceException) {
        this.turndownServiceException = turndownServiceException;
        return this;
    }
}