package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CsvNi
 * Number Insight
**/
public class CsvNi {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public CsvNi withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public CsvNi withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_name")
    public String countryName;
    public CsvNi withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public CsvNi withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_received")
    public LocalDate dateReceived;
    public CsvNi withDateReceived(LocalDate dateReceived) {
        this.dateReceived = dateReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public CsvNi withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public CsvNi withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public CsvNi withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_name")
    public String networkName;
    public CsvNi withNetworkName(String networkName) {
        this.networkName = networkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_type")
    public String networkType;
    public CsvNi withNetworkType(String networkType) {
        this.networkType = networkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public CsvNi withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ported")
    public String ported;
    public CsvNi withPorted(String ported) {
        this.ported = ported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_type")
    public String productType;
    public CsvNi withProductType(String productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachable")
    public String reachable;
    public CsvNi withReachable(String reachable) {
        this.reachable = reachable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public CsvNi withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_code")
    public String responseCode;
    public CsvNi withResponseCode(String responseCode) {
        this.responseCode = responseCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public CsvNi withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_price")
    public Double totalPrice;
    public CsvNi withTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valid")
    public String valid;
    public CsvNi withValid(String valid) {
        this.valid = valid;
        return this;
    }
}