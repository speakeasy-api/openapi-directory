package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * EndUserAgreementInput
 * Represents an end-user agreement.
**/
public class EndUserAgreementInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_scope")
@SpeakeasyMetadata("form:name=access_scope multipartForm:name=access_scope,json")
    public String[] accessScope;
    public EndUserAgreementInput withAccessScope(String[] accessScope) {
        this.accessScope = accessScope;
        return this;
    }
    @JsonProperty("aspsp_id")
@SpeakeasyMetadata("form:name=aspsp_id multipartForm:name=aspsp_id")
    public String aspspId;
    public EndUserAgreementInput withAspspId(String aspspId) {
        this.aspspId = aspspId;
        return this;
    }
    @JsonProperty("enduser_id")
@SpeakeasyMetadata("form:name=enduser_id multipartForm:name=enduser_id")
    public String enduserId;
    public EndUserAgreementInput withEnduserId(String enduserId) {
        this.enduserId = enduserId;
        return this;
    }
    @JsonProperty("max_historical_days")
@SpeakeasyMetadata("form:name=max_historical_days multipartForm:name=max_historical_days")
    public Long maxHistoricalDays;
    public EndUserAgreementInput withMaxHistoricalDays(Long maxHistoricalDays) {
        this.maxHistoricalDays = maxHistoricalDays;
        return this;
    }
}