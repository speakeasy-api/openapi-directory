package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeepLinksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cabin-class")
    public String cabinClass;
    public DeepLinksQueryParams withCabinClass(String cabinClass) {
        this.cabinClass = cabinClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=catalogues")
    public String catalogues;
    public DeepLinksQueryParams withCatalogues(String catalogues) {
        this.catalogues = catalogues;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public DeepLinksQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destination")
    public String destination;
    public DeepLinksQueryParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destination-name")
    public String destinationName;
    public DeepLinksQueryParams withDestinationName(String destinationName) {
        this.destinationName = destinationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=encryption-key")
    public String encryptionKey;
    public DeepLinksQueryParams withEncryptionKey(String encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fare")
    public String fare;
    public DeepLinksQueryParams withFare(String fare) {
        this.fare = fare;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fare-currency")
    public String fareCurrency;
    public DeepLinksQueryParams withFareCurrency(String fareCurrency) {
        this.fareCurrency = fareCurrency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public String lang;
    public DeepLinksQueryParams withLang(String lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=net-fare")
    public String netFare;
    public DeepLinksQueryParams withNetFare(String netFare) {
        this.netFare = netFare;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=origin")
    public String origin;
    public DeepLinksQueryParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=origin-name")
    public String originName;
    public DeepLinksQueryParams withOriginName(String originName) {
        this.originName = originName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outbound-segments")
    public String outboundSegments;
    public DeepLinksQueryParams withOutboundSegments(String outboundSegments) {
        this.outboundSegments = outboundSegments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=partnerid")
    public String partnerid;
    public DeepLinksQueryParams withPartnerid(String partnerid) {
        this.partnerid = partnerid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=return-date")
    public String returnDate;
    public DeepLinksQueryParams withReturnDate(String returnDate) {
        this.returnDate = returnDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=return-segments")
    public String returnSegments;
    public DeepLinksQueryParams withReturnSegments(String returnSegments) {
        this.returnSegments = returnSegments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trackingid")
    public String trackingid;
    public DeepLinksQueryParams withTrackingid(String trackingid) {
        this.trackingid = trackingid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travel-date")
    public String travelDate;
    public DeepLinksQueryParams withTravelDate(String travelDate) {
        this.travelDate = travelDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travelers")
    public String travelers;
    public DeepLinksQueryParams withTravelers(String travelers) {
        this.travelers = travelers;
        return this;
    }
}