package openapisdk.models.shared;



/**
 * Event
 * Event
**/
public class Event {
    public Accessibility accessibility;
    public Event withAccessibility(Accessibility accessibility) {
        this.accessibility = accessibility;
        return this;
    }
    public String additionalInfo;
    public Event withAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
        return this;
    }
    public Classification[] classifications;
    public Event withClassifications(Classification[] classifications) {
        this.classifications = classifications;
        return this;
    }
    public EventDates dates;
    public Event withDates(EventDates dates) {
        this.dates = dates;
        return this;
    }
    public String description;
    public Event withDescription(String description) {
        this.description = description;
        return this;
    }
    public Double distance;
    public Event withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    public java.util.Map<String, ExternalLink[]> externalLinks;
    public Event withExternalLinks(java.util.Map<String, ExternalLink[]> externalLinks) {
        this.externalLinks = externalLinks;
        return this;
    }
    public String id;
    public Event withId(String id) {
        this.id = id;
        return this;
    }
    public Image[] images;
    public Event withImages(Image[] images) {
        this.images = images;
        return this;
    }
    public String info;
    public Event withInfo(String info) {
        this.info = info;
        return this;
    }
    public String locale;
    public Event withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    public Location location;
    public Event withLocation(Location location) {
        this.location = location;
        return this;
    }
    public String name;
    public Event withName(String name) {
        this.name = name;
        return this;
    }
    public Outlet[] outlets;
    public Event withOutlets(Outlet[] outlets) {
        this.outlets = outlets;
        return this;
    }
    public Place place;
    public Event withPlace(Place place) {
        this.place = place;
        return this;
    }
    public String pleaseNote;
    public Event withPleaseNote(String pleaseNote) {
        this.pleaseNote = pleaseNote;
        return this;
    }
    public PriceRange[] priceRanges;
    public Event withPriceRanges(PriceRange[] priceRanges) {
        this.priceRanges = priceRanges;
        return this;
    }
    public Product[] products;
    public Event withProducts(Product[] products) {
        this.products = products;
        return this;
    }
    public Promoter promoter;
    public Event withPromoter(Promoter promoter) {
        this.promoter = promoter;
        return this;
    }
    public Promoter[] promoters;
    public Event withPromoters(Promoter[] promoters) {
        this.promoters = promoters;
        return this;
    }
    public EventSalesDates sales;
    public Event withSales(EventSalesDates sales) {
        this.sales = sales;
        return this;
    }
    public SeatMap seatmap;
    public Event withSeatmap(SeatMap seatmap) {
        this.seatmap = seatmap;
        return this;
    }
    public Boolean test;
    public Event withTest(Boolean test) {
        this.test = test;
        return this;
    }
    public EventTypeEnum type;
    public Event withType(EventTypeEnum type) {
        this.type = type;
        return this;
    }
    public String units;
    public Event withUnits(String units) {
        this.units = units;
        return this;
    }
    public String url;
    public Event withUrl(String url) {
        this.url = url;
        return this;
    }
}