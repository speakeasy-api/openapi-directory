package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IpInfoResponse {
    @JsonProperty("city")
    public String city;
    public IpInfoResponse withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("continentCode")
    public String continentCode;
    public IpInfoResponse withContinentCode(String continentCode) {
        this.continentCode = continentCode;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public IpInfoResponse withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("countryCode")
    public String countryCode;
    public IpInfoResponse withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("countryCode3")
    public String countryCode3;
    public IpInfoResponse withCountryCode3(String countryCode3) {
        this.countryCode3 = countryCode3;
        return this;
    }
    @JsonProperty("currencyCode")
    public String currencyCode;
    public IpInfoResponse withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("hostDomain")
    public String hostDomain;
    public IpInfoResponse withHostDomain(String hostDomain) {
        this.hostDomain = hostDomain;
        return this;
    }
    @JsonProperty("hostname")
    public String hostname;
    public IpInfoResponse withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public IpInfoResponse withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("isBogon")
    public Boolean isBogon;
    public IpInfoResponse withIsBogon(Boolean isBogon) {
        this.isBogon = isBogon;
        return this;
    }
    @JsonProperty("isV4Mapped")
    public Boolean isV4Mapped;
    public IpInfoResponse withIsV4Mapped(Boolean isV4Mapped) {
        this.isV4Mapped = isV4Mapped;
        return this;
    }
    @JsonProperty("isV6")
    public Boolean isV6;
    public IpInfoResponse withIsV6(Boolean isV6) {
        this.isV6 = isV6;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public IpInfoResponse withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public IpInfoResponse withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public IpInfoResponse withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("timezone")
    public java.util.Map<String, Timezone> timezone;
    public IpInfoResponse withTimezone(java.util.Map<String, Timezone> timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonProperty("valid")
    public Boolean valid;
    public IpInfoResponse withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}