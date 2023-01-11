package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accelerationEfficiency")
    public Float accelerationEfficiency;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withAccelerationEfficiency(Float accelerationEfficiency) {
        this.accelerationEfficiency = accelerationEfficiency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=arriveAt")
    public String arriveAt;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withArriveAt(String arriveAt) {
        this.arriveAt = arriveAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auxiliaryPowerInLitersPerHour")
    public Float auxiliaryPowerInLitersPerHour;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withAuxiliaryPowerInLitersPerHour(Float auxiliaryPowerInLitersPerHour) {
        this.auxiliaryPowerInLitersPerHour = auxiliaryPowerInLitersPerHour;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=avoid")
    public String avoid;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withAvoid(String avoid) {
        this.avoid = avoid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=constantSpeedConsumptionInLitersPerHundredkm")
    public String constantSpeedConsumptionInLitersPerHundredkm;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withConstantSpeedConsumptionInLitersPerHundredkm(String constantSpeedConsumptionInLitersPerHundredkm) {
        this.constantSpeedConsumptionInLitersPerHundredkm = constantSpeedConsumptionInLitersPerHundredkm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=constantSpeedConsumptionInkWhPerHundredkm")
    public String constantSpeedConsumptionInkWhPerHundredkm;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withConstantSpeedConsumptionInkWhPerHundredkm(String constantSpeedConsumptionInkWhPerHundredkm) {
        this.constantSpeedConsumptionInkWhPerHundredkm = constantSpeedConsumptionInkWhPerHundredkm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currentFuelInLiters")
    public Float currentFuelInLiters;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withCurrentFuelInLiters(Float currentFuelInLiters) {
        this.currentFuelInLiters = currentFuelInLiters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=decelerationEfficiency")
    public Float decelerationEfficiency;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withDecelerationEfficiency(Float decelerationEfficiency) {
        this.decelerationEfficiency = decelerationEfficiency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departAt")
    public String departAt;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withDepartAt(String departAt) {
        this.departAt = departAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=downhillEfficiency")
    public Float downhillEfficiency;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withDownhillEfficiency(Float downhillEfficiency) {
        this.downhillEfficiency = downhillEfficiency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=energyBudgetInkWh")
    public Float energyBudgetInkWh;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withEnergyBudgetInkWh(Float energyBudgetInkWh) {
        this.energyBudgetInkWh = energyBudgetInkWh;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fuelBudgetInLiters")
    public Float fuelBudgetInLiters;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withFuelBudgetInLiters(Float fuelBudgetInLiters) {
        this.fuelBudgetInLiters = fuelBudgetInLiters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fuelEnergyDensityInMJoulesPerLiter")
    public Float fuelEnergyDensityInMJoulesPerLiter;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withFuelEnergyDensityInMJoulesPerLiter(Float fuelEnergyDensityInMJoulesPerLiter) {
        this.fuelEnergyDensityInMJoulesPerLiter = fuelEnergyDensityInMJoulesPerLiter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hilliness")
    public openapisdk.models.shared.HillinessEnum hilliness;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withHilliness(openapisdk.models.shared.HillinessEnum hilliness) {
        this.hilliness = hilliness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report")
    public openapisdk.models.shared.ReportEnum report;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withReport(openapisdk.models.shared.ReportEnum report) {
        this.report = report;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeType")
    public openapisdk.models.shared.RouteTypeEnum routeType;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withRouteType(openapisdk.models.shared.RouteTypeEnum routeType) {
        this.routeType = routeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeBudgetInSec")
    public Float timeBudgetInSec;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withTimeBudgetInSec(Float timeBudgetInSec) {
        this.timeBudgetInSec = timeBudgetInSec;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=traffic")
    public Boolean traffic;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withTraffic(Boolean traffic) {
        this.traffic = traffic;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travelMode")
    public openapisdk.models.shared.TravelModeEnum travelMode;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withTravelMode(openapisdk.models.shared.TravelModeEnum travelMode) {
        this.travelMode = travelMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uphillEfficiency")
    public Float uphillEfficiency;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withUphillEfficiency(Float uphillEfficiency) {
        this.uphillEfficiency = uphillEfficiency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleAxleWeight")
    public Long vehicleAxleWeight;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleAxleWeight(Long vehicleAxleWeight) {
        this.vehicleAxleWeight = vehicleAxleWeight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleCommercial")
    public Boolean vehicleCommercial;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleCommercial(Boolean vehicleCommercial) {
        this.vehicleCommercial = vehicleCommercial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleEngineType")
    public openapisdk.models.shared.DownhillEfficiencyEnum vehicleEngineType;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleEngineType(openapisdk.models.shared.DownhillEfficiencyEnum vehicleEngineType) {
        this.vehicleEngineType = vehicleEngineType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleHeight")
    public Float vehicleHeight;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleHeight(Float vehicleHeight) {
        this.vehicleHeight = vehicleHeight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleLength")
    public Float vehicleLength;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleLength(Float vehicleLength) {
        this.vehicleLength = vehicleLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleLoadType")
    public String vehicleLoadType;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleLoadType(String vehicleLoadType) {
        this.vehicleLoadType = vehicleLoadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleMaxSpeed")
    public Long vehicleMaxSpeed;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleMaxSpeed(Long vehicleMaxSpeed) {
        this.vehicleMaxSpeed = vehicleMaxSpeed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleWeight")
    public Long vehicleWeight;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleWeight(Long vehicleWeight) {
        this.vehicleWeight = vehicleWeight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleWidth")
    public Float vehicleWidth;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withVehicleWidth(Float vehicleWidth) {
        this.vehicleWidth = vehicleWidth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=windingness")
    public openapisdk.models.shared.WindingnessEnum windingness;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams withWindingness(openapisdk.models.shared.WindingnessEnum windingness) {
        this.windingness = windingness;
        return this;
    }
}