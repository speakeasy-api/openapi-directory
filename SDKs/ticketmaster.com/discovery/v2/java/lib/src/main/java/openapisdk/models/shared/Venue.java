package openapisdk.models.shared;



/**
 * Venue
 * Venue
**/
public class Venue {
    public String accessibleSeatingDetail;
    public Venue withAccessibleSeatingDetail(String accessibleSeatingDetail) {
        this.accessibleSeatingDetail = accessibleSeatingDetail;
        return this;
    }
    public String additionalInfo;
    public Venue withAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
        return this;
    }
    public Address address;
    public Venue withAddress(Address address) {
        this.address = address;
        return this;
    }
    public VenueBoxOfficeInfo boxOfficeInfo;
    public Venue withBoxOfficeInfo(VenueBoxOfficeInfo boxOfficeInfo) {
        this.boxOfficeInfo = boxOfficeInfo;
        return this;
    }
    public City city;
    public Venue withCity(City city) {
        this.city = city;
        return this;
    }
    public Country country;
    public Venue withCountry(Country country) {
        this.country = country;
        return this;
    }
    public String currency;
    public Venue withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    public String description;
    public Venue withDescription(String description) {
        this.description = description;
        return this;
    }
    public Double distance;
    public Venue withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    public Dma[] dma;
    public Venue withDma(Dma[] dma) {
        this.dma = dma;
        return this;
    }
    public java.util.Map<String, ExternalLink[]> externalLinks;
    public Venue withExternalLinks(java.util.Map<String, ExternalLink[]> externalLinks) {
        this.externalLinks = externalLinks;
        return this;
    }
    public VenueGeneralInfo generalInfo;
    public Venue withGeneralInfo(VenueGeneralInfo generalInfo) {
        this.generalInfo = generalInfo;
        return this;
    }
    public String id;
    public Venue withId(String id) {
        this.id = id;
        return this;
    }
    public Image[] images;
    public Venue withImages(Image[] images) {
        this.images = images;
        return this;
    }
    public String locale;
    public Venue withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    public Location location;
    public Venue withLocation(Location location) {
        this.location = location;
        return this;
    }
    public Market[] markets;
    public Venue withMarkets(Market[] markets) {
        this.markets = markets;
        return this;
    }
    public String name;
    public Venue withName(String name) {
        this.name = name;
        return this;
    }
    public String parkingDetail;
    public Venue withParkingDetail(String parkingDetail) {
        this.parkingDetail = parkingDetail;
        return this;
    }
    public String postalCode;
    public Venue withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    public Social social;
    public Venue withSocial(Social social) {
        this.social = social;
        return this;
    }
    public State state;
    public Venue withState(State state) {
        this.state = state;
        return this;
    }
    public Boolean test;
    public Venue withTest(Boolean test) {
        this.test = test;
        return this;
    }
    public String timezone;
    public Venue withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    public VenueTypeEnum type;
    public Venue withType(VenueTypeEnum type) {
        this.type = type;
        return this;
    }
    public String units;
    public Venue withUnits(String units) {
        this.units = units;
        return this;
    }
    public java.util.Map<String, Integer> upcomingEvents;
    public Venue withUpcomingEvents(java.util.Map<String, Integer> upcomingEvents) {
        this.upcomingEvents = upcomingEvents;
        return this;
    }
    public String url;
    public Venue withUrl(String url) {
        this.url = url;
        return this;
    }
}