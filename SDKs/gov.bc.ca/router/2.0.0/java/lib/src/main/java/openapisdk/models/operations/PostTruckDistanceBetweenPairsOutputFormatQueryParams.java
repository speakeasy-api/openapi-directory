package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostTruckDistanceBetweenPairsOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=correctSide")
    public Boolean correctSide;
    public PostTruckDistanceBetweenPairsOutputFormatQueryParams withCorrectSide(Boolean correctSide) {
        this.correctSide = correctSide;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=criteria")
    public PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum criteria;
    public PostTruckDistanceBetweenPairsOutputFormatQueryParams withCriteria(PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum criteria) {
        this.criteria = criteria;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departure")
    public OffsetDateTime departure;
    public PostTruckDistanceBetweenPairsOutputFormatQueryParams withDeparture(OffsetDateTime departure) {
        this.departure = departure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disable")
    public String disable;
    public PostTruckDistanceBetweenPairsOutputFormatQueryParams withDisable(String disable) {
        this.disable = disable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distanceUnit")
    public PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum distanceUnit;
    public PostTruckDistanceBetweenPairsOutputFormatQueryParams withDistanceUnit(PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromPoints")
    public String fromPoints;
    public PostTruckDistanceBetweenPairsOutputFormatQueryParams withFromPoints(String fromPoints) {
        this.fromPoints = fromPoints;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxPairs")
    public Long maxPairs;
    public PostTruckDistanceBetweenPairsOutputFormatQueryParams withMaxPairs(Long maxPairs) {
        this.maxPairs = maxPairs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public PostTruckDistanceBetweenPairsOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeDescription")
    public String routeDescription;
    public PostTruckDistanceBetweenPairsOutputFormatQueryParams withRouteDescription(String routeDescription) {
        this.routeDescription = routeDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toPoints")
    public String toPoints;
    public PostTruckDistanceBetweenPairsOutputFormatQueryParams withToPoints(String toPoints) {
        this.toPoints = toPoints;
        return this;
    }
}