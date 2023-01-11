package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Product
 * A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:
 * 
 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
**/
public class Product {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billedBuyer")
    public Buyer billedBuyer;
    public Product withBilledBuyer(Buyer billedBuyer) {
        this.billedBuyer = billedBuyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyer")
    public Buyer buyer;
    public Product withBuyer(Buyer buyer) {
        this.buyer = buyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTimeMs")
    public String creationTimeMs;
    public Product withCreationTimeMs(String creationTimeMs) {
        this.creationTimeMs = creationTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorContacts")
    public ContactInformation[] creatorContacts;
    public Product withCreatorContacts(ContactInformation[] creatorContacts) {
        this.creatorContacts = creatorContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorRole")
    public String creatorRole;
    public Product withCreatorRole(String creatorRole) {
        this.creatorRole = creatorRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryControl")
    public DeliveryControl deliveryControl;
    public Product withDeliveryControl(DeliveryControl deliveryControl) {
        this.deliveryControl = deliveryControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightEndTimeMs")
    public String flightEndTimeMs;
    public Product withFlightEndTimeMs(String flightEndTimeMs) {
        this.flightEndTimeMs = flightEndTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightStartTimeMs")
    public String flightStartTimeMs;
    public Product withFlightStartTimeMs(String flightStartTimeMs) {
        this.flightStartTimeMs = flightStartTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasCreatorSignedOff")
    public Boolean hasCreatorSignedOff;
    public Product withHasCreatorSignedOff(Boolean hasCreatorSignedOff) {
        this.hasCreatorSignedOff = hasCreatorSignedOff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySource")
    public String inventorySource;
    public Product withInventorySource(String inventorySource) {
        this.inventorySource = inventorySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Product withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public MarketplaceLabel[] labels;
    public Product withLabels(MarketplaceLabel[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdateTimeMs")
    public String lastUpdateTimeMs;
    public Product withLastUpdateTimeMs(String lastUpdateTimeMs) {
        this.lastUpdateTimeMs = lastUpdateTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyOfferId")
    public String legacyOfferId;
    public Product withLegacyOfferId(String legacyOfferId) {
        this.legacyOfferId = legacyOfferId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplacePublisherProfileId")
    public String marketplacePublisherProfileId;
    public Product withMarketplacePublisherProfileId(String marketplacePublisherProfileId) {
        this.marketplacePublisherProfileId = marketplacePublisherProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Product withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateAuctionId")
    public String privateAuctionId;
    public Product withPrivateAuctionId(String privateAuctionId) {
        this.privateAuctionId = privateAuctionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public Product withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherProfileId")
    public String publisherProfileId;
    public Product withPublisherProfileId(String publisherProfileId) {
        this.publisherProfileId = publisherProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherProvidedForecast")
    public PublisherProvidedForecast publisherProvidedForecast;
    public Product withPublisherProvidedForecast(PublisherProvidedForecast publisherProvidedForecast) {
        this.publisherProvidedForecast = publisherProvidedForecast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionNumber")
    public String revisionNumber;
    public Product withRevisionNumber(String revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller")
    public Seller seller;
    public Product withSeller(Seller seller) {
        this.seller = seller;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedTargetings")
    public SharedTargeting[] sharedTargetings;
    public Product withSharedTargetings(SharedTargeting[] sharedTargetings) {
        this.sharedTargetings = sharedTargetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public Product withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syndicationProduct")
    public String syndicationProduct;
    public Product withSyndicationProduct(String syndicationProduct) {
        this.syndicationProduct = syndicationProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public DealTerms terms;
    public Product withTerms(DealTerms terms) {
        this.terms = terms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyCode")
    public String webPropertyCode;
    public Product withWebPropertyCode(String webPropertyCode) {
        this.webPropertyCode = webPropertyCode;
        return this;
    }
}