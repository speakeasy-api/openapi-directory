package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Venue
 * Venue
**/
public class Venue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessibleSeatingDetails")
    public java.util.Map<String, String> accessibleSeatingDetails;
    public Venue withAccessibleSeatingDetails(java.util.Map<String, String> accessibleSeatingDetails) {
        this.accessibleSeatingDetails = accessibleSeatingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public Venue withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalInfos")
    public java.util.Map<String, String> additionalInfos;
    public Venue withAdditionalInfos(java.util.Map<String, String> additionalInfos) {
        this.additionalInfos = additionalInfos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public Address address;
    public Venue withAddress(Address address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boxOfficeInfo")
    public VenueBoxOfficeInfo boxOfficeInfo;
    public Venue withBoxOfficeInfo(VenueBoxOfficeInfo boxOfficeInfo) {
        this.boxOfficeInfo = boxOfficeInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public City city;
    public Venue withCity(City city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public Country country;
    public Venue withCountry(Country country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public Venue withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptions")
    public java.util.Map<String, String> descriptions;
    public Venue withDescriptions(java.util.Map<String, String> descriptions) {
        this.descriptions = descriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discoverable")
    public Boolean discoverable;
    public Venue withDiscoverable(Boolean discoverable) {
        this.discoverable = discoverable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Double distance;
    public Venue withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dma")
    public Dma[] dma;
    public Venue withDma(Dma[] dma) {
        this.dma = dma;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generalInfo")
    public VenueGeneralInfo generalInfo;
    public Venue withGeneralInfo(VenueGeneralInfo generalInfo) {
        this.generalInfo = generalInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public Image[] images;
    public Venue withImages(Image[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public Venue withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markets")
    public Market[] markets;
    public Venue withMarkets(Market[] markets) {
        this.markets = markets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public java.util.Map<String, String> names;
    public Venue withNames(java.util.Map<String, String> names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parkingDetails")
    public java.util.Map<String, String> parkingDetails;
    public Venue withParkingDetails(java.util.Map<String, String> parkingDetails) {
        this.parkingDetails = parkingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public Venue withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public java.util.Map<String, String> references;
    public Venue withReferences(java.util.Map<String, String> references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public java.util.Map<String, Object>[] relationships;
    public Venue withRelationships(java.util.Map<String, Object>[] relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("social")
    public Social social;
    public Venue withSocial(Social social) {
        this.social = social;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Source source;
    public Venue withSource(Source source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public State state;
    public Venue withState(State state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("test")
    public Boolean test;
    public Venue withTest(Boolean test) {
        this.test = test;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Venue withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonProperty("type")
    public VenueTypeEnum type;
    public Venue withType(VenueTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public String units;
    public Venue withUnits(String units) {
        this.units = units;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Venue withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public Venue withVersion(Long version) {
        this.version = version;
        return this;
    }
}