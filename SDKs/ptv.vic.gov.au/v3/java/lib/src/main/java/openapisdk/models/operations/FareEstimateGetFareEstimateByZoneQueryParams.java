package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class FareEstimateGetFareEstimateByZoneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public FareEstimateGetFareEstimateByZoneQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_journey_in_free_tram_zone")
    public Boolean isJourneyInFreeTramZone;
    public FareEstimateGetFareEstimateByZoneQueryParams withIsJourneyInFreeTramZone(Boolean isJourneyInFreeTramZone) {
        this.isJourneyInFreeTramZone = isJourneyInFreeTramZone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=journey_touch_off_utc")
    public OffsetDateTime journeyTouchOffUtc;
    public FareEstimateGetFareEstimateByZoneQueryParams withJourneyTouchOffUtc(OffsetDateTime journeyTouchOffUtc) {
        this.journeyTouchOffUtc = journeyTouchOffUtc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=journey_touch_on_utc")
    public OffsetDateTime journeyTouchOnUtc;
    public FareEstimateGetFareEstimateByZoneQueryParams withJourneyTouchOnUtc(OffsetDateTime journeyTouchOnUtc) {
        this.journeyTouchOnUtc = journeyTouchOnUtc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public FareEstimateGetFareEstimateByZoneQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public FareEstimateGetFareEstimateByZoneQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travelled_route_types")
    public Integer[] travelledRouteTypes;
    public FareEstimateGetFareEstimateByZoneQueryParams withTravelledRouteTypes(Integer[] travelledRouteTypes) {
        this.travelledRouteTypes = travelledRouteTypes;
        return this;
    }
}