package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceQuotasRemaining
 * The resource quota tokens remaining for the property after the request is completed.
**/
public class ResourceQuotasRemaining {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailyQuotaTokensRemaining")
    public Integer dailyQuotaTokensRemaining;
    public ResourceQuotasRemaining withDailyQuotaTokensRemaining(Integer dailyQuotaTokensRemaining) {
        this.dailyQuotaTokensRemaining = dailyQuotaTokensRemaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hourlyQuotaTokensRemaining")
    public Integer hourlyQuotaTokensRemaining;
    public ResourceQuotasRemaining withHourlyQuotaTokensRemaining(Integer hourlyQuotaTokensRemaining) {
        this.hourlyQuotaTokensRemaining = hourlyQuotaTokensRemaining;
        return this;
    }
}