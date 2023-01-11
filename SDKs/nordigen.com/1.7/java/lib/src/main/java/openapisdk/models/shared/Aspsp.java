package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Aspsp
 * Represents an ASPSP.
**/
public class Aspsp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bic")
    public String bic;
    public Aspsp withBic(String bic) {
        this.bic = bic;
        return this;
    }
    @JsonProperty("countries")
    public String[] countries;
    public Aspsp withCountries(String[] countries) {
        this.countries = countries;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Aspsp withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("logo")
    public String logo;
    public Aspsp withLogo(String logo) {
        this.logo = logo;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Aspsp withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_total_days")
    public String transactionTotalDays;
    public Aspsp withTransactionTotalDays(String transactionTotalDays) {
        this.transactionTotalDays = transactionTotalDays;
        return this;
    }
}