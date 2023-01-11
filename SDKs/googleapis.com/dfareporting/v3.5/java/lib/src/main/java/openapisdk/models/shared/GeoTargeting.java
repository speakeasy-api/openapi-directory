package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeoTargeting
 * Geographical Targeting.
**/
public class GeoTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cities")
    public City[] cities;
    public GeoTargeting withCities(City[] cities) {
        this.cities = cities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public Country[] countries;
    public GeoTargeting withCountries(Country[] countries) {
        this.countries = countries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeCountries")
    public Boolean excludeCountries;
    public GeoTargeting withExcludeCountries(Boolean excludeCountries) {
        this.excludeCountries = excludeCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metros")
    public Metro[] metros;
    public GeoTargeting withMetros(Metro[] metros) {
        this.metros = metros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCodes")
    public PostalCode[] postalCodes;
    public GeoTargeting withPostalCodes(PostalCode[] postalCodes) {
        this.postalCodes = postalCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public Region[] regions;
    public GeoTargeting withRegions(Region[] regions) {
        this.regions = regions;
        return this;
    }
}