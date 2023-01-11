package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Event
 * Event
**/
public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public Event withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalInfos")
    public java.util.Map<String, String> additionalInfos;
    public Event withAdditionalInfos(java.util.Map<String, String> additionalInfos) {
        this.additionalInfos = additionalInfos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attractions")
    public Attraction[] attractions;
    public Event withAttractions(Attraction[] attractions) {
        this.attractions = attractions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classifications")
    public Classification[] classifications;
    public Event withClassifications(Classification[] classifications) {
        this.classifications = classifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dates")
    public EventDates dates;
    public Event withDates(EventDates dates) {
        this.dates = dates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptions")
    public java.util.Map<String, String> descriptions;
    public Event withDescriptions(java.util.Map<String, String> descriptions) {
        this.descriptions = descriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discoverable")
    public Boolean discoverable;
    public Event withDiscoverable(Boolean discoverable) {
        this.discoverable = discoverable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Double distance;
    public Event withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public Image[] images;
    public Event withImages(Image[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infos")
    public java.util.Map<String, String> infos;
    public Event withInfos(java.util.Map<String, String> infos) {
        this.infos = infos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public Event withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public java.util.Map<String, String> names;
    public Event withNames(java.util.Map<String, String> names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("place")
    public Place place;
    public Event withPlace(Place place) {
        this.place = place;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pleaseNotes")
    public java.util.Map<String, String> pleaseNotes;
    public Event withPleaseNotes(java.util.Map<String, String> pleaseNotes) {
        this.pleaseNotes = pleaseNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceRanges")
    public PriceRange[] priceRanges;
    public Event withPriceRanges(PriceRange[] priceRanges) {
        this.priceRanges = priceRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promoter")
    public Promoter promoter;
    public Event withPromoter(Promoter promoter) {
        this.promoter = promoter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicVisibility")
    public PublicVisibility publicVisibility;
    public Event withPublicVisibility(PublicVisibility publicVisibility) {
        this.publicVisibility = publicVisibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public java.util.Map<String, String> references;
    public Event withReferences(java.util.Map<String, String> references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationships")
    public java.util.Map<String, Object>[] relationships;
    public Event withRelationships(java.util.Map<String, Object>[] relationships) {
        this.relationships = relationships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sales")
    public EventSalesDates sales;
    public Event withSales(EventSalesDates sales) {
        this.sales = sales;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Source source;
    public Event withSource(Source source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("test")
    public Boolean test;
    public Event withTest(Boolean test) {
        this.test = test;
        return this;
    }
    @JsonProperty("type")
    public EventTypeEnum type;
    public Event withType(EventTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public String units;
    public Event withUnits(String units) {
        this.units = units;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Event withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("venue")
    public Venue venue;
    public Event withVenue(Venue venue) {
        this.venue = venue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public Event withVersion(Long version) {
        this.version = version;
        return this;
    }
}