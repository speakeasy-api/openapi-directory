package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BinLookupResponse {
    @JsonProperty("cardBrand")
    public String cardBrand;
    public BinLookupResponse withCardBrand(String cardBrand) {
        this.cardBrand = cardBrand;
        return this;
    }
    @JsonProperty("cardCategory")
    public String cardCategory;
    public BinLookupResponse withCardCategory(String cardCategory) {
        this.cardCategory = cardCategory;
        return this;
    }
    @JsonProperty("cardType")
    public String cardType;
    public BinLookupResponse withCardType(String cardType) {
        this.cardType = cardType;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public BinLookupResponse withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("countryCode")
    public String countryCode;
    public BinLookupResponse withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("countryCode3")
    public String countryCode3;
    public BinLookupResponse withCountryCode3(String countryCode3) {
        this.countryCode3 = countryCode3;
        return this;
    }
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BinLookupResponse withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("ipBlocklisted")
    public Boolean ipBlocklisted;
    public BinLookupResponse withIpBlocklisted(Boolean ipBlocklisted) {
        this.ipBlocklisted = ipBlocklisted;
        return this;
    }
    @JsonProperty("ipBlocklists")
    public String[] ipBlocklists;
    public BinLookupResponse withIpBlocklists(String[] ipBlocklists) {
        this.ipBlocklists = ipBlocklists;
        return this;
    }
    @JsonProperty("ipCity")
    public String ipCity;
    public BinLookupResponse withIpCity(String ipCity) {
        this.ipCity = ipCity;
        return this;
    }
    @JsonProperty("ipCountry")
    public String ipCountry;
    public BinLookupResponse withIpCountry(String ipCountry) {
        this.ipCountry = ipCountry;
        return this;
    }
    @JsonProperty("ipCountryCode")
    public String ipCountryCode;
    public BinLookupResponse withIpCountryCode(String ipCountryCode) {
        this.ipCountryCode = ipCountryCode;
        return this;
    }
    @JsonProperty("ipCountryCode3")
    public String ipCountryCode3;
    public BinLookupResponse withIpCountryCode3(String ipCountryCode3) {
        this.ipCountryCode3 = ipCountryCode3;
        return this;
    }
    @JsonProperty("ipMatchesBin")
    public Boolean ipMatchesBin;
    public BinLookupResponse withIpMatchesBin(Boolean ipMatchesBin) {
        this.ipMatchesBin = ipMatchesBin;
        return this;
    }
    @JsonProperty("ipRegion")
    public String ipRegion;
    public BinLookupResponse withIpRegion(String ipRegion) {
        this.ipRegion = ipRegion;
        return this;
    }
    @JsonProperty("isCommercial")
    public Boolean isCommercial;
    public BinLookupResponse withIsCommercial(Boolean isCommercial) {
        this.isCommercial = isCommercial;
        return this;
    }
    @JsonProperty("isPrepaid")
    public Boolean isPrepaid;
    public BinLookupResponse withIsPrepaid(Boolean isPrepaid) {
        this.isPrepaid = isPrepaid;
        return this;
    }
    @JsonProperty("issuer")
    public String issuer;
    public BinLookupResponse withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonProperty("issuerPhone")
    public String issuerPhone;
    public BinLookupResponse withIssuerPhone(String issuerPhone) {
        this.issuerPhone = issuerPhone;
        return this;
    }
    @JsonProperty("issuerWebsite")
    public String issuerWebsite;
    public BinLookupResponse withIssuerWebsite(String issuerWebsite) {
        this.issuerWebsite = issuerWebsite;
        return this;
    }
    @JsonProperty("valid")
    public Boolean valid;
    public BinLookupResponse withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}