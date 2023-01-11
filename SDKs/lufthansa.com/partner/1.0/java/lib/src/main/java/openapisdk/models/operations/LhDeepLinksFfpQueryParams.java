package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LhDeepLinksFfpQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cabin-class")
    public String cabinClass;
    public LhDeepLinksFfpQueryParams withCabinClass(String cabinClass) {
        this.cabinClass = cabinClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=catalogues")
    public String catalogues;
    public LhDeepLinksFfpQueryParams withCatalogues(String catalogues) {
        this.catalogues = catalogues;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public LhDeepLinksFfpQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destination")
    public String destination;
    public LhDeepLinksFfpQueryParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=encryption-key")
    public String encryptionKey;
    public LhDeepLinksFfpQueryParams withEncryptionKey(String encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public String lang;
    public LhDeepLinksFfpQueryParams withLang(String lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=origin")
    public String origin;
    public LhDeepLinksFfpQueryParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=partnerid")
    public String partnerid;
    public LhDeepLinksFfpQueryParams withPartnerid(String partnerid) {
        this.partnerid = partnerid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=return-date")
    public String returnDate;
    public LhDeepLinksFfpQueryParams withReturnDate(String returnDate) {
        this.returnDate = returnDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trackingid")
    public String trackingid;
    public LhDeepLinksFfpQueryParams withTrackingid(String trackingid) {
        this.trackingid = trackingid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travel-date")
    public String travelDate;
    public LhDeepLinksFfpQueryParams withTravelDate(String travelDate) {
        this.travelDate = travelDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travelers")
    public String travelers;
    public LhDeepLinksFfpQueryParams withTravelers(String travelers) {
        this.travelers = travelers;
        return this;
    }
}