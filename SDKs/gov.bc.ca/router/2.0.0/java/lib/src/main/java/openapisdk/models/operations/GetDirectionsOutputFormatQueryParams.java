package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDirectionsOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=correctSide")
    public Boolean correctSide;
    public GetDirectionsOutputFormatQueryParams withCorrectSide(Boolean correctSide) {
        this.correctSide = correctSide;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=criteria")
    public GetDirectionsOutputFormatCriteriaEnum criteria;
    public GetDirectionsOutputFormatQueryParams withCriteria(GetDirectionsOutputFormatCriteriaEnum criteria) {
        this.criteria = criteria;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departure")
    public OffsetDateTime departure;
    public GetDirectionsOutputFormatQueryParams withDeparture(OffsetDateTime departure) {
        this.departure = departure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disable")
    public String disable;
    public GetDirectionsOutputFormatQueryParams withDisable(String disable) {
        this.disable = disable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distanceUnit")
    public GetDirectionsOutputFormatDistanceUnitEnum distanceUnit;
    public GetDirectionsOutputFormatQueryParams withDistanceUnit(GetDirectionsOutputFormatDistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetDirectionsOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=points")
    public String points;
    public GetDirectionsOutputFormatQueryParams withPoints(String points) {
        this.points = points;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roundTrip")
    public Boolean roundTrip;
    public GetDirectionsOutputFormatQueryParams withRoundTrip(Boolean roundTrip) {
        this.roundTrip = roundTrip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeDescription")
    public String routeDescription;
    public GetDirectionsOutputFormatQueryParams withRouteDescription(String routeDescription) {
        this.routeDescription = routeDescription;
        return this;
    }
}