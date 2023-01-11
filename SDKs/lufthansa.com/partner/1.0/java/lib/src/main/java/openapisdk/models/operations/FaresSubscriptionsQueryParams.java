package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FaresSubscriptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cabin-class")
    public String cabinClass;
    public FaresSubscriptionsQueryParams withCabinClass(String cabinClass) {
        this.cabinClass = cabinClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public FaresSubscriptionsQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destination")
    public String destination;
    public FaresSubscriptionsQueryParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public FaresSubscriptionsQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public String lang;
    public FaresSubscriptionsQueryParams withLang(String lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=origin")
    public String origin;
    public FaresSubscriptionsQueryParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trackingid")
    public String trackingid;
    public FaresSubscriptionsQueryParams withTrackingid(String trackingid) {
        this.trackingid = trackingid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trip-duration")
    public String tripDuration;
    public FaresSubscriptionsQueryParams withTripDuration(String tripDuration) {
        this.tripDuration = tripDuration;
        return this;
    }
}