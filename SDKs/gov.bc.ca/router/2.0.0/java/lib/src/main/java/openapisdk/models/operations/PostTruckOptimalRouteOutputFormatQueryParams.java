package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostTruckOptimalRouteOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=correctSide")
    public Boolean correctSide;
    public PostTruckOptimalRouteOutputFormatQueryParams withCorrectSide(Boolean correctSide) {
        this.correctSide = correctSide;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=criteria")
    public PostTruckOptimalRouteOutputFormatCriteriaEnum criteria;
    public PostTruckOptimalRouteOutputFormatQueryParams withCriteria(PostTruckOptimalRouteOutputFormatCriteriaEnum criteria) {
        this.criteria = criteria;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departure")
    public OffsetDateTime departure;
    public PostTruckOptimalRouteOutputFormatQueryParams withDeparture(OffsetDateTime departure) {
        this.departure = departure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disable")
    public String disable;
    public PostTruckOptimalRouteOutputFormatQueryParams withDisable(String disable) {
        this.disable = disable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distanceUnit")
    public PostTruckOptimalRouteOutputFormatDistanceUnitEnum distanceUnit;
    public PostTruckOptimalRouteOutputFormatQueryParams withDistanceUnit(PostTruckOptimalRouteOutputFormatDistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public PostTruckOptimalRouteOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=points")
    public String points;
    public PostTruckOptimalRouteOutputFormatQueryParams withPoints(String points) {
        this.points = points;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roundTrip")
    public Boolean roundTrip;
    public PostTruckOptimalRouteOutputFormatQueryParams withRoundTrip(Boolean roundTrip) {
        this.roundTrip = roundTrip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeDescription")
    public String routeDescription;
    public PostTruckOptimalRouteOutputFormatQueryParams withRouteDescription(String routeDescription) {
        this.routeDescription = routeDescription;
        return this;
    }
}