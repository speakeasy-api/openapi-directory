package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTruckDistanceBetweenPairsOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=correctSide")
    public Boolean correctSide;
    public GetTruckDistanceBetweenPairsOutputFormatQueryParams withCorrectSide(Boolean correctSide) {
        this.correctSide = correctSide;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=criteria")
    public GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum criteria;
    public GetTruckDistanceBetweenPairsOutputFormatQueryParams withCriteria(GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum criteria) {
        this.criteria = criteria;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departure")
    public OffsetDateTime departure;
    public GetTruckDistanceBetweenPairsOutputFormatQueryParams withDeparture(OffsetDateTime departure) {
        this.departure = departure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disable")
    public String disable;
    public GetTruckDistanceBetweenPairsOutputFormatQueryParams withDisable(String disable) {
        this.disable = disable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distanceUnit")
    public GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum distanceUnit;
    public GetTruckDistanceBetweenPairsOutputFormatQueryParams withDistanceUnit(GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromPoints")
    public String fromPoints;
    public GetTruckDistanceBetweenPairsOutputFormatQueryParams withFromPoints(String fromPoints) {
        this.fromPoints = fromPoints;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxPairs")
    public Long maxPairs;
    public GetTruckDistanceBetweenPairsOutputFormatQueryParams withMaxPairs(Long maxPairs) {
        this.maxPairs = maxPairs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetTruckDistanceBetweenPairsOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeDescription")
    public String routeDescription;
    public GetTruckDistanceBetweenPairsOutputFormatQueryParams withRouteDescription(String routeDescription) {
        this.routeDescription = routeDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toPoints")
    public String toPoints;
    public GetTruckDistanceBetweenPairsOutputFormatQueryParams withToPoints(String toPoints) {
        this.toPoints = toPoints;
        return this;
    }
}