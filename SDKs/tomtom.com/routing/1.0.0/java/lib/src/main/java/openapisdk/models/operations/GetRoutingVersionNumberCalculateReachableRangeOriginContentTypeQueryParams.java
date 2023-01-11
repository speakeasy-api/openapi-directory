package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accelerationEfficiency")
    public Float accelerationEfficiency;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withAccelerationEfficiency(Float accelerationEfficiency) {
        this.accelerationEfficiency = accelerationEfficiency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=arriveAt")
    public String arriveAt;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withArriveAt(String arriveAt) {
        this.arriveAt = arriveAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auxiliaryPowerInLitersPerHour")
    public Float auxiliaryPowerInLitersPerHour;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withAuxiliaryPowerInLitersPerHour(Float auxiliaryPowerInLitersPerHour) {
        this.auxiliaryPowerInLitersPerHour = auxiliaryPowerInLitersPerHour;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=avoid")
    public String avoid;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withAvoid(String avoid) {
        this.avoid = avoid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=constantSpeedConsumptionInLitersPerHundredkm")
    public String constantSpeedConsumptionInLitersPerHundredkm;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withConstantSpeedConsumptionInLitersPerHundredkm(String constantSpeedConsumptionInLitersPerHundredkm) {
        this.constantSpeedConsumptionInLitersPerHundredkm = constantSpeedConsumptionInLitersPerHundredkm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=constantSpeedConsumptionInkWhPerHundredkm")
    public String constantSpeedConsumptionInkWhPerHundredkm;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withConstantSpeedConsumptionInkWhPerHundredkm(String constantSpeedConsumptionInkWhPerHundredkm) {
        this.constantSpeedConsumptionInkWhPerHundredkm = constantSpeedConsumptionInkWhPerHundredkm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currentFuelInLiters")
    public Float currentFuelInLiters;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withCurrentFuelInLiters(Float currentFuelInLiters) {
        this.currentFuelInLiters = currentFuelInLiters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=decelerationEfficiency")
    public Float decelerationEfficiency;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withDecelerationEfficiency(Float decelerationEfficiency) {
        this.decelerationEfficiency = decelerationEfficiency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departAt")
    public String departAt;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withDepartAt(String departAt) {
        this.departAt = departAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=downhillEfficiency")
    public Float downhillEfficiency;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withDownhillEfficiency(Float downhillEfficiency) {
        this.downhillEfficiency = downhillEfficiency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=energyBudgetInkWh")
    public Float energyBudgetInkWh;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withEnergyBudgetInkWh(Float energyBudgetInkWh) {
        this.energyBudgetInkWh = energyBudgetInkWh;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fuelBudgetInLiters")
    public Float fuelBudgetInLiters;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withFuelBudgetInLiters(Float fuelBudgetInLiters) {
        this.fuelBudgetInLiters = fuelBudgetInLiters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fuelEnergyDensityInMJoulesPerLiter")
    public Float fuelEnergyDensityInMJoulesPerLiter;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withFuelEnergyDensityInMJoulesPerLiter(Float fuelEnergyDensityInMJoulesPerLiter) {
        this.fuelEnergyDensityInMJoulesPerLiter = fuelEnergyDensityInMJoulesPerLiter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hilliness")
    public openapisdk.models.shared.HillinessEnum hilliness;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withHilliness(openapisdk.models.shared.HillinessEnum hilliness) {
        this.hilliness = hilliness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report")
    public openapisdk.models.shared.ReportEnum report;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withReport(openapisdk.models.shared.ReportEnum report) {
        this.report = report;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeType")
    public openapisdk.models.shared.RouteTypeEnum routeType;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withRouteType(openapisdk.models.shared.RouteTypeEnum routeType) {
        this.routeType = routeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeBudgetInSec")
    public Float timeBudgetInSec;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withTimeBudgetInSec(Float timeBudgetInSec) {
        this.timeBudgetInSec = timeBudgetInSec;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=traffic")
    public Boolean traffic;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withTraffic(Boolean traffic) {
        this.traffic = traffic;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travelMode")
    public openapisdk.models.shared.TravelModeEnum travelMode;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withTravelMode(openapisdk.models.shared.TravelModeEnum travelMode) {
        this.travelMode = travelMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uphillEfficiency")
    public Float uphillEfficiency;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withUphillEfficiency(Float uphillEfficiency) {
        this.uphillEfficiency = uphillEfficiency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleAxleWeight")
    public Long vehicleAxleWeight;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleAxleWeight(Long vehicleAxleWeight) {
        this.vehicleAxleWeight = vehicleAxleWeight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleCommercial")
    public Boolean vehicleCommercial;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleCommercial(Boolean vehicleCommercial) {
        this.vehicleCommercial = vehicleCommercial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleEngineType")
    public openapisdk.models.shared.DownhillEfficiencyEnum vehicleEngineType;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleEngineType(openapisdk.models.shared.DownhillEfficiencyEnum vehicleEngineType) {
        this.vehicleEngineType = vehicleEngineType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleHeight")
    public Float vehicleHeight;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleHeight(Float vehicleHeight) {
        this.vehicleHeight = vehicleHeight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleLength")
    public Float vehicleLength;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleLength(Float vehicleLength) {
        this.vehicleLength = vehicleLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleLoadType")
    public String vehicleLoadType;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleLoadType(String vehicleLoadType) {
        this.vehicleLoadType = vehicleLoadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleMaxSpeed")
    public Long vehicleMaxSpeed;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleMaxSpeed(Long vehicleMaxSpeed) {
        this.vehicleMaxSpeed = vehicleMaxSpeed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleWeight")
    public Long vehicleWeight;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleWeight(Long vehicleWeight) {
        this.vehicleWeight = vehicleWeight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleWidth")
    public Float vehicleWidth;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleWidth(Float vehicleWidth) {
        this.vehicleWidth = vehicleWidth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=windingness")
    public openapisdk.models.shared.WindingnessEnum windingness;
    public GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withWindingness(openapisdk.models.shared.WindingnessEnum windingness) {
        this.windingness = windingness;
        return this;
    }
}