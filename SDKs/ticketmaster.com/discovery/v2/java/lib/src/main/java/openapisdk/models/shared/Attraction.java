package openapisdk.models.shared;



/**
 * Attraction
 * Attraction
**/
public class Attraction {
    public String additionalInfo;
    public Attraction withAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
        return this;
    }
    public Classification[] classifications;
    public Attraction withClassifications(Classification[] classifications) {
        this.classifications = classifications;
        return this;
    }
    public String description;
    public Attraction withDescription(String description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, ExternalLink[]> externalLinks;
    public Attraction withExternalLinks(java.util.Map<String, ExternalLink[]> externalLinks) {
        this.externalLinks = externalLinks;
        return this;
    }
    public String id;
    public Attraction withId(String id) {
        this.id = id;
        return this;
    }
    public Image[] images;
    public Attraction withImages(Image[] images) {
        this.images = images;
        return this;
    }
    public String locale;
    public Attraction withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    public String name;
    public Attraction withName(String name) {
        this.name = name;
        return this;
    }
    public Boolean test;
    public Attraction withTest(Boolean test) {
        this.test = test;
        return this;
    }
    public AttractionTypeEnum type;
    public Attraction withType(AttractionTypeEnum type) {
        this.type = type;
        return this;
    }
    public java.util.Map<String, Integer> upcomingEvents;
    public Attraction withUpcomingEvents(java.util.Map<String, Integer> upcomingEvents) {
        this.upcomingEvents = upcomingEvents;
        return this;
    }
    public String url;
    public Attraction withUrl(String url) {
        this.url = url;
        return this;
    }
}