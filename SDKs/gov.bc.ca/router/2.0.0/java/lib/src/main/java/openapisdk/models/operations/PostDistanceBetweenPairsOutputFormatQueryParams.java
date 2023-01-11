package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostDistanceBetweenPairsOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=correctSide")
    public Boolean correctSide;
    public PostDistanceBetweenPairsOutputFormatQueryParams withCorrectSide(Boolean correctSide) {
        this.correctSide = correctSide;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=criteria")
    public PostDistanceBetweenPairsOutputFormatCriteriaEnum criteria;
    public PostDistanceBetweenPairsOutputFormatQueryParams withCriteria(PostDistanceBetweenPairsOutputFormatCriteriaEnum criteria) {
        this.criteria = criteria;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departure")
    public OffsetDateTime departure;
    public PostDistanceBetweenPairsOutputFormatQueryParams withDeparture(OffsetDateTime departure) {
        this.departure = departure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disable")
    public String disable;
    public PostDistanceBetweenPairsOutputFormatQueryParams withDisable(String disable) {
        this.disable = disable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distanceUnit")
    public PostDistanceBetweenPairsOutputFormatDistanceUnitEnum distanceUnit;
    public PostDistanceBetweenPairsOutputFormatQueryParams withDistanceUnit(PostDistanceBetweenPairsOutputFormatDistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromPoints")
    public String fromPoints;
    public PostDistanceBetweenPairsOutputFormatQueryParams withFromPoints(String fromPoints) {
        this.fromPoints = fromPoints;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxPairs")
    public Long maxPairs;
    public PostDistanceBetweenPairsOutputFormatQueryParams withMaxPairs(Long maxPairs) {
        this.maxPairs = maxPairs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public PostDistanceBetweenPairsOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeDescription")
    public String routeDescription;
    public PostDistanceBetweenPairsOutputFormatQueryParams withRouteDescription(String routeDescription) {
        this.routeDescription = routeDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toPoints")
    public String toPoints;
    public PostDistanceBetweenPairsOutputFormatQueryParams withToPoints(String toPoints) {
        this.toPoints = toPoints;
        return this;
    }
}