package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class NumberDetails {
    @SpeakeasyMetadata("form:name=country")
    public String country;
    public NumberDetails withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("form:name=msisdn")
    public String msisdn;
    public NumberDetails withMsisdn(String msisdn) {
        this.msisdn = msisdn;
        return this;
    }
    @SpeakeasyMetadata("form:name=target_api_key")
    public String targetApiKey;
    public NumberDetails withTargetApiKey(String targetApiKey) {
        this.targetApiKey = targetApiKey;
        return this;
    }
}