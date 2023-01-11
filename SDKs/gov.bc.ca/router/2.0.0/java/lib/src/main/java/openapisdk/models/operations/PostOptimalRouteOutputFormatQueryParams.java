package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostOptimalRouteOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=correctSide")
    public Boolean correctSide;
    public PostOptimalRouteOutputFormatQueryParams withCorrectSide(Boolean correctSide) {
        this.correctSide = correctSide;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=criteria")
    public PostOptimalRouteOutputFormatCriteriaEnum criteria;
    public PostOptimalRouteOutputFormatQueryParams withCriteria(PostOptimalRouteOutputFormatCriteriaEnum criteria) {
        this.criteria = criteria;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departure")
    public OffsetDateTime departure;
    public PostOptimalRouteOutputFormatQueryParams withDeparture(OffsetDateTime departure) {
        this.departure = departure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disable")
    public String disable;
    public PostOptimalRouteOutputFormatQueryParams withDisable(String disable) {
        this.disable = disable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distanceUnit")
    public PostOptimalRouteOutputFormatDistanceUnitEnum distanceUnit;
    public PostOptimalRouteOutputFormatQueryParams withDistanceUnit(PostOptimalRouteOutputFormatDistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public PostOptimalRouteOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=points")
    public String points;
    public PostOptimalRouteOutputFormatQueryParams withPoints(String points) {
        this.points = points;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roundTrip")
    public Boolean roundTrip;
    public PostOptimalRouteOutputFormatQueryParams withRoundTrip(Boolean roundTrip) {
        this.roundTrip = roundTrip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeDescription")
    public String routeDescription;
    public PostOptimalRouteOutputFormatQueryParams withRouteDescription(String routeDescription) {
        this.routeDescription = routeDescription;
        return this;
    }
}