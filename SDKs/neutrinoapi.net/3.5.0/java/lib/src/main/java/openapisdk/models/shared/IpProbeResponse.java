package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IpProbeResponse {
    @JsonProperty("asAge")
    public Integer asAge;
    public IpProbeResponse withAsAge(Integer asAge) {
        this.asAge = asAge;
        return this;
    }
    @JsonProperty("asCidr")
    public String asCidr;
    public IpProbeResponse withAsCidr(String asCidr) {
        this.asCidr = asCidr;
        return this;
    }
    @JsonProperty("asCountryCode")
    public String asCountryCode;
    public IpProbeResponse withAsCountryCode(String asCountryCode) {
        this.asCountryCode = asCountryCode;
        return this;
    }
    @JsonProperty("asCountryCode3")
    public String asCountryCode3;
    public IpProbeResponse withAsCountryCode3(String asCountryCode3) {
        this.asCountryCode3 = asCountryCode3;
        return this;
    }
    @JsonProperty("asDescription")
    public String asDescription;
    public IpProbeResponse withAsDescription(String asDescription) {
        this.asDescription = asDescription;
        return this;
    }
    @JsonProperty("asDomains")
    public String[] asDomains;
    public IpProbeResponse withAsDomains(String[] asDomains) {
        this.asDomains = asDomains;
        return this;
    }
    @JsonProperty("asn")
    public String asn;
    public IpProbeResponse withAsn(String asn) {
        this.asn = asn;
        return this;
    }
    @JsonProperty("city")
    public String city;
    public IpProbeResponse withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("continentCode")
    public String continentCode;
    public IpProbeResponse withContinentCode(String continentCode) {
        this.continentCode = continentCode;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public IpProbeResponse withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("countryCode")
    public String countryCode;
    public IpProbeResponse withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("countryCode3")
    public String countryCode3;
    public IpProbeResponse withCountryCode3(String countryCode3) {
        this.countryCode3 = countryCode3;
        return this;
    }
    @JsonProperty("currencyCode")
    public String currencyCode;
    public IpProbeResponse withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("hostDomain")
    public String hostDomain;
    public IpProbeResponse withHostDomain(String hostDomain) {
        this.hostDomain = hostDomain;
        return this;
    }
    @JsonProperty("hostname")
    public String hostname;
    public IpProbeResponse withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public IpProbeResponse withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("isBogon")
    public Boolean isBogon;
    public IpProbeResponse withIsBogon(Boolean isBogon) {
        this.isBogon = isBogon;
        return this;
    }
    @JsonProperty("isHosting")
    public Boolean isHosting;
    public IpProbeResponse withIsHosting(Boolean isHosting) {
        this.isHosting = isHosting;
        return this;
    }
    @JsonProperty("isIsp")
    public Boolean isIsp;
    public IpProbeResponse withIsIsp(Boolean isIsp) {
        this.isIsp = isIsp;
        return this;
    }
    @JsonProperty("isProxy")
    public Boolean isProxy;
    public IpProbeResponse withIsProxy(Boolean isProxy) {
        this.isProxy = isProxy;
        return this;
    }
    @JsonProperty("isV4Mapped")
    public Boolean isV4Mapped;
    public IpProbeResponse withIsV4Mapped(Boolean isV4Mapped) {
        this.isV4Mapped = isV4Mapped;
        return this;
    }
    @JsonProperty("isV6")
    public Boolean isV6;
    public IpProbeResponse withIsV6(Boolean isV6) {
        this.isV6 = isV6;
        return this;
    }
    @JsonProperty("isVpn")
    public Boolean isVpn;
    public IpProbeResponse withIsVpn(Boolean isVpn) {
        this.isVpn = isVpn;
        return this;
    }
    @JsonProperty("providerDescription")
    public String providerDescription;
    public IpProbeResponse withProviderDescription(String providerDescription) {
        this.providerDescription = providerDescription;
        return this;
    }
    @JsonProperty("providerDomain")
    public String providerDomain;
    public IpProbeResponse withProviderDomain(String providerDomain) {
        this.providerDomain = providerDomain;
        return this;
    }
    @JsonProperty("providerType")
    public String providerType;
    public IpProbeResponse withProviderType(String providerType) {
        this.providerType = providerType;
        return this;
    }
    @JsonProperty("providerWebsite")
    public String providerWebsite;
    public IpProbeResponse withProviderWebsite(String providerWebsite) {
        this.providerWebsite = providerWebsite;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public IpProbeResponse withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("valid")
    public Boolean valid;
    public IpProbeResponse withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
    @JsonProperty("vpnDomain")
    public String vpnDomain;
    public IpProbeResponse withVpnDomain(String vpnDomain) {
        this.vpnDomain = vpnDomain;
        return this;
    }
}