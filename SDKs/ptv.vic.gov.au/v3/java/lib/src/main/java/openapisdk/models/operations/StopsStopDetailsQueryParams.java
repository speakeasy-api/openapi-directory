package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopsStopDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public StopsStopDetailsQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gtfs")
    public Boolean gtfs;
    public StopsStopDetailsQueryParams withGtfs(Boolean gtfs) {
        this.gtfs = gtfs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public StopsStopDetailsQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stop_accessibility")
    public Boolean stopAccessibility;
    public StopsStopDetailsQueryParams withStopAccessibility(Boolean stopAccessibility) {
        this.stopAccessibility = stopAccessibility;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stop_amenities")
    public Boolean stopAmenities;
    public StopsStopDetailsQueryParams withStopAmenities(Boolean stopAmenities) {
        this.stopAmenities = stopAmenities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stop_contact")
    public Boolean stopContact;
    public StopsStopDetailsQueryParams withStopContact(Boolean stopContact) {
        this.stopContact = stopContact;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stop_disruptions")
    public Boolean stopDisruptions;
    public StopsStopDetailsQueryParams withStopDisruptions(Boolean stopDisruptions) {
        this.stopDisruptions = stopDisruptions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stop_location")
    public Boolean stopLocation;
    public StopsStopDetailsQueryParams withStopLocation(Boolean stopLocation) {
        this.stopLocation = stopLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stop_staffing")
    public Boolean stopStaffing;
    public StopsStopDetailsQueryParams withStopStaffing(Boolean stopStaffing) {
        this.stopStaffing = stopStaffing;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stop_ticket")
    public Boolean stopTicket;
    public StopsStopDetailsQueryParams withStopTicket(Boolean stopTicket) {
        this.stopTicket = stopTicket;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public StopsStopDetailsQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}