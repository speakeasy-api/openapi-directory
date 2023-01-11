package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublisherProfileApiProto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audience")
    public String audience;
    public PublisherProfileApiProto withAudience(String audience) {
        this.audience = audience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerPitchStatement")
    public String buyerPitchStatement;
    public PublisherProfileApiProto withBuyerPitchStatement(String buyerPitchStatement) {
        this.buyerPitchStatement = buyerPitchStatement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directContact")
    public String directContact;
    public PublisherProfileApiProto withDirectContact(String directContact) {
        this.directContact = directContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchange")
    public String exchange;
    public PublisherProfileApiProto withExchange(String exchange) {
        this.exchange = exchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forecastInventory")
    public String forecastInventory;
    public PublisherProfileApiProto withForecastInventory(String forecastInventory) {
        this.forecastInventory = forecastInventory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googlePlusLink")
    public String googlePlusLink;
    public PublisherProfileApiProto withGooglePlusLink(String googlePlusLink) {
        this.googlePlusLink = googlePlusLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isParent")
    public Boolean isParent;
    public PublisherProfileApiProto withIsParent(Boolean isParent) {
        this.isParent = isParent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPublished")
    public Boolean isPublished;
    public PublisherProfileApiProto withIsPublished(Boolean isPublished) {
        this.isPublished = isPublished;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PublisherProfileApiProto withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logoUrl")
    public String logoUrl;
    public PublisherProfileApiProto withLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaKitLink")
    public String mediaKitLink;
    public PublisherProfileApiProto withMediaKitLink(String mediaKitLink) {
        this.mediaKitLink = mediaKitLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PublisherProfileApiProto withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overview")
    public String overview;
    public PublisherProfileApiProto withOverview(String overview) {
        this.overview = overview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileId")
    public Integer profileId;
    public PublisherProfileApiProto withProfileId(Integer profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("programmaticContact")
    public String programmaticContact;
    public PublisherProfileApiProto withProgrammaticContact(String programmaticContact) {
        this.programmaticContact = programmaticContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherAppIds")
    public String[] publisherAppIds;
    public PublisherProfileApiProto withPublisherAppIds(String[] publisherAppIds) {
        this.publisherAppIds = publisherAppIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherApps")
    public MobileApplication[] publisherApps;
    public PublisherProfileApiProto withPublisherApps(MobileApplication[] publisherApps) {
        this.publisherApps = publisherApps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherDomains")
    public String[] publisherDomains;
    public PublisherProfileApiProto withPublisherDomains(String[] publisherDomains) {
        this.publisherDomains = publisherDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherProfileId")
    public String publisherProfileId;
    public PublisherProfileApiProto withPublisherProfileId(String publisherProfileId) {
        this.publisherProfileId = publisherProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherProvidedForecast")
    public PublisherProvidedForecast publisherProvidedForecast;
    public PublisherProfileApiProto withPublisherProvidedForecast(PublisherProvidedForecast publisherProvidedForecast) {
        this.publisherProvidedForecast = publisherProvidedForecast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateCardInfoLink")
    public String rateCardInfoLink;
    public PublisherProfileApiProto withRateCardInfoLink(String rateCardInfoLink) {
        this.rateCardInfoLink = rateCardInfoLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samplePageLink")
    public String samplePageLink;
    public PublisherProfileApiProto withSamplePageLink(String samplePageLink) {
        this.samplePageLink = samplePageLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller")
    public Seller seller;
    public PublisherProfileApiProto withSeller(Seller seller) {
        this.seller = seller;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public PublisherProfileApiProto withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topHeadlines")
    public String[] topHeadlines;
    public PublisherProfileApiProto withTopHeadlines(String[] topHeadlines) {
        this.topHeadlines = topHeadlines;
        return this;
    }
}