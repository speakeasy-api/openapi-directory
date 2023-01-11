package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostTruckDistanceOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=correctSide")
    public Boolean correctSide;
    public PostTruckDistanceOutputFormatQueryParams withCorrectSide(Boolean correctSide) {
        this.correctSide = correctSide;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=criteria")
    public PostTruckDistanceOutputFormatCriteriaEnum criteria;
    public PostTruckDistanceOutputFormatQueryParams withCriteria(PostTruckDistanceOutputFormatCriteriaEnum criteria) {
        this.criteria = criteria;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departure")
    public OffsetDateTime departure;
    public PostTruckDistanceOutputFormatQueryParams withDeparture(OffsetDateTime departure) {
        this.departure = departure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disable")
    public String disable;
    public PostTruckDistanceOutputFormatQueryParams withDisable(String disable) {
        this.disable = disable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distanceUnit")
    public PostTruckDistanceOutputFormatDistanceUnitEnum distanceUnit;
    public PostTruckDistanceOutputFormatQueryParams withDistanceUnit(PostTruckDistanceOutputFormatDistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public PostTruckDistanceOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=points")
    public String points;
    public PostTruckDistanceOutputFormatQueryParams withPoints(String points) {
        this.points = points;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roundTrip")
    public Boolean roundTrip;
    public PostTruckDistanceOutputFormatQueryParams withRoundTrip(Boolean roundTrip) {
        this.roundTrip = roundTrip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeDescription")
    public String routeDescription;
    public PostTruckDistanceOutputFormatQueryParams withRouteDescription(String routeDescription) {
        this.routeDescription = routeDescription;
        return this;
    }
}