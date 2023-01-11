package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Partner
 * A single partner in Display & Video 360 (DV360).
**/
public class Partner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adServerConfig")
    public PartnerAdServerConfig adServerConfig;
    public Partner withAdServerConfig(PartnerAdServerConfig adServerConfig) {
        this.adServerConfig = adServerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataAccessConfig")
    public PartnerDataAccessConfig dataAccessConfig;
    public Partner withDataAccessConfig(PartnerDataAccessConfig dataAccessConfig) {
        this.dataAccessConfig = dataAccessConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Partner withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public PartnerEntityStatusEnum entityStatus;
    public Partner withEntityStatus(PartnerEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchangeConfig")
    public ExchangeConfig exchangeConfig;
    public Partner withExchangeConfig(ExchangeConfig exchangeConfig) {
        this.exchangeConfig = exchangeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generalConfig")
    public PartnerGeneralConfig generalConfig;
    public Partner withGeneralConfig(PartnerGeneralConfig generalConfig) {
        this.generalConfig = generalConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Partner withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public Partner withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Partner withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}