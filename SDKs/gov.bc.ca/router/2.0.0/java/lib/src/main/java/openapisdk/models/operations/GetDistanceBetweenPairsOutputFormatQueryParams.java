package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDistanceBetweenPairsOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=correctSide")
    public Boolean correctSide;
    public GetDistanceBetweenPairsOutputFormatQueryParams withCorrectSide(Boolean correctSide) {
        this.correctSide = correctSide;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=criteria")
    public GetDistanceBetweenPairsOutputFormatCriteriaEnum criteria;
    public GetDistanceBetweenPairsOutputFormatQueryParams withCriteria(GetDistanceBetweenPairsOutputFormatCriteriaEnum criteria) {
        this.criteria = criteria;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departure")
    public OffsetDateTime departure;
    public GetDistanceBetweenPairsOutputFormatQueryParams withDeparture(OffsetDateTime departure) {
        this.departure = departure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disable")
    public String disable;
    public GetDistanceBetweenPairsOutputFormatQueryParams withDisable(String disable) {
        this.disable = disable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distanceUnit")
    public GetDistanceBetweenPairsOutputFormatDistanceUnitEnum distanceUnit;
    public GetDistanceBetweenPairsOutputFormatQueryParams withDistanceUnit(GetDistanceBetweenPairsOutputFormatDistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromPoints")
    public String fromPoints;
    public GetDistanceBetweenPairsOutputFormatQueryParams withFromPoints(String fromPoints) {
        this.fromPoints = fromPoints;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxPairs")
    public Long maxPairs;
    public GetDistanceBetweenPairsOutputFormatQueryParams withMaxPairs(Long maxPairs) {
        this.maxPairs = maxPairs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetDistanceBetweenPairsOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeDescription")
    public String routeDescription;
    public GetDistanceBetweenPairsOutputFormatQueryParams withRouteDescription(String routeDescription) {
        this.routeDescription = routeDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toPoints")
    public String toPoints;
    public GetDistanceBetweenPairsOutputFormatQueryParams withToPoints(String toPoints) {
        this.toPoints = toPoints;
        return this;
    }
}