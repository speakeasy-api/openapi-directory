package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CsvVerify
 * Verify
**/
public class CsvVerify {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public CsvVerify withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public CsvVerify withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_name")
    public String countryName;
    public CsvVerify withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public CsvVerify withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_finalized")
    public LocalDate dateFinalized;
    public CsvVerify withDateFinalized(LocalDate dateFinalized) {
        this.dateFinalized = dateFinalized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_received")
    public LocalDate dateReceived;
    public CsvVerify withDateReceived(LocalDate dateReceived) {
        this.dateReceived = dateReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimated_price")
    public String estimatedPrice;
    public CsvVerify withEstimatedPrice(String estimatedPrice) {
        this.estimatedPrice = estimatedPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_event_date")
    public LocalDate firstEventDate;
    public CsvVerify withFirstEventDate(LocalDate firstEventDate) {
        this.firstEventDate = firstEventDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public CsvVerify withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_event_date")
    public LocalDate lastEventDate;
    public CsvVerify withLastEventDate(LocalDate lastEventDate) {
        this.lastEventDate = lastEventDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public CsvVerify withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public CsvVerify withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_name")
    public String networkName;
    public CsvVerify withNetworkName(String networkName) {
        this.networkName = networkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_type")
    public String numberType;
    public CsvVerify withNumberType(String numberType) {
        this.numberType = numberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public CsvVerify withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricing_model")
    public String pricingModel;
    public CsvVerify withPricingModel(String pricingModel) {
        this.pricingModel = pricingModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public CsvVerify withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_event_count")
    public Long smsEventCount;
    public CsvVerify withSmsEventCount(Long smsEventCount) {
        this.smsEventCount = smsEventCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public CsvVerify withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tts_event_count")
    public Long ttsEventCount;
    public CsvVerify withTtsEventCount(Long ttsEventCount) {
        this.ttsEventCount = ttsEventCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verify_status")
    public String verifyStatus;
    public CsvVerify withVerifyStatus(String verifyStatus) {
        this.verifyStatus = verifyStatus;
        return this;
    }
}