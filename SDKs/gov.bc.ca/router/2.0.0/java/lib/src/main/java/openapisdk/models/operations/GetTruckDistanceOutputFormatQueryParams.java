package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTruckDistanceOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=correctSide")
    public Boolean correctSide;
    public GetTruckDistanceOutputFormatQueryParams withCorrectSide(Boolean correctSide) {
        this.correctSide = correctSide;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=criteria")
    public GetTruckDistanceOutputFormatCriteriaEnum criteria;
    public GetTruckDistanceOutputFormatQueryParams withCriteria(GetTruckDistanceOutputFormatCriteriaEnum criteria) {
        this.criteria = criteria;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departure")
    public OffsetDateTime departure;
    public GetTruckDistanceOutputFormatQueryParams withDeparture(OffsetDateTime departure) {
        this.departure = departure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disable")
    public String disable;
    public GetTruckDistanceOutputFormatQueryParams withDisable(String disable) {
        this.disable = disable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distanceUnit")
    public GetTruckDistanceOutputFormatDistanceUnitEnum distanceUnit;
    public GetTruckDistanceOutputFormatQueryParams withDistanceUnit(GetTruckDistanceOutputFormatDistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetTruckDistanceOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=points")
    public String points;
    public GetTruckDistanceOutputFormatQueryParams withPoints(String points) {
        this.points = points;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roundTrip")
    public Boolean roundTrip;
    public GetTruckDistanceOutputFormatQueryParams withRoundTrip(Boolean roundTrip) {
        this.roundTrip = roundTrip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeDescription")
    public String routeDescription;
    public GetTruckDistanceOutputFormatQueryParams withRouteDescription(String routeDescription) {
        this.routeDescription = routeDescription;
        return this;
    }
}