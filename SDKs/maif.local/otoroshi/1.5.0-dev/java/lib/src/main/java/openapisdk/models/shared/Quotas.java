package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Quotas
 * Quotas state for an api key on a service group
**/
public class Quotas {
    @JsonProperty("authorizedCallsPerDay")
    public Long authorizedCallsPerDay;
    public Quotas withAuthorizedCallsPerDay(Long authorizedCallsPerDay) {
        this.authorizedCallsPerDay = authorizedCallsPerDay;
        return this;
    }
    @JsonProperty("authorizedCallsPerMonth")
    public Long authorizedCallsPerMonth;
    public Quotas withAuthorizedCallsPerMonth(Long authorizedCallsPerMonth) {
        this.authorizedCallsPerMonth = authorizedCallsPerMonth;
        return this;
    }
    @JsonProperty("authorizedCallsPerSec")
    public Long authorizedCallsPerSec;
    public Quotas withAuthorizedCallsPerSec(Long authorizedCallsPerSec) {
        this.authorizedCallsPerSec = authorizedCallsPerSec;
        return this;
    }
    @JsonProperty("currentCallsPerDay")
    public Long currentCallsPerDay;
    public Quotas withCurrentCallsPerDay(Long currentCallsPerDay) {
        this.currentCallsPerDay = currentCallsPerDay;
        return this;
    }
    @JsonProperty("currentCallsPerMonth")
    public Long currentCallsPerMonth;
    public Quotas withCurrentCallsPerMonth(Long currentCallsPerMonth) {
        this.currentCallsPerMonth = currentCallsPerMonth;
        return this;
    }
    @JsonProperty("currentCallsPerSec")
    public Long currentCallsPerSec;
    public Quotas withCurrentCallsPerSec(Long currentCallsPerSec) {
        this.currentCallsPerSec = currentCallsPerSec;
        return this;
    }
    @JsonProperty("remainingCallsPerDay")
    public Long remainingCallsPerDay;
    public Quotas withRemainingCallsPerDay(Long remainingCallsPerDay) {
        this.remainingCallsPerDay = remainingCallsPerDay;
        return this;
    }
    @JsonProperty("remainingCallsPerMonth")
    public Long remainingCallsPerMonth;
    public Quotas withRemainingCallsPerMonth(Long remainingCallsPerMonth) {
        this.remainingCallsPerMonth = remainingCallsPerMonth;
        return this;
    }
    @JsonProperty("remainingCallsPerSec")
    public Long remainingCallsPerSec;
    public Quotas withRemainingCallsPerSec(Long remainingCallsPerSec) {
        this.remainingCallsPerSec = remainingCallsPerSec;
        return this;
    }
}