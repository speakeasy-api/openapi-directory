package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accelerationEfficiency")
    public Float accelerationEfficiency;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withAccelerationEfficiency(Float accelerationEfficiency) {
        this.accelerationEfficiency = accelerationEfficiency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alternativeType")
    public openapisdk.models.shared.AlternativeTypeEnum alternativeType;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withAlternativeType(openapisdk.models.shared.AlternativeTypeEnum alternativeType) {
        this.alternativeType = alternativeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=arriveAt")
    public String arriveAt;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withArriveAt(String arriveAt) {
        this.arriveAt = arriveAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auxiliaryPowerInLitersPerHour")
    public Float auxiliaryPowerInLitersPerHour;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withAuxiliaryPowerInLitersPerHour(Float auxiliaryPowerInLitersPerHour) {
        this.auxiliaryPowerInLitersPerHour = auxiliaryPowerInLitersPerHour;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=avoid")
    public String avoid;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withAvoid(String avoid) {
        this.avoid = avoid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=computeBestOrder")
    public Boolean computeBestOrder;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withComputeBestOrder(Boolean computeBestOrder) {
        this.computeBestOrder = computeBestOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=computeTravelTimeFor")
    public openapisdk.models.shared.ComputeTravelTimeForEnum computeTravelTimeFor;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withComputeTravelTimeFor(openapisdk.models.shared.ComputeTravelTimeForEnum computeTravelTimeFor) {
        this.computeTravelTimeFor = computeTravelTimeFor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=constantSpeedConsumptionInLitersPerHundredkm")
    public String constantSpeedConsumptionInLitersPerHundredkm;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withConstantSpeedConsumptionInLitersPerHundredkm(String constantSpeedConsumptionInLitersPerHundredkm) {
        this.constantSpeedConsumptionInLitersPerHundredkm = constantSpeedConsumptionInLitersPerHundredkm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=constantSpeedConsumptionInkWhPerHundredkm")
    public String constantSpeedConsumptionInkWhPerHundredkm;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withConstantSpeedConsumptionInkWhPerHundredkm(String constantSpeedConsumptionInkWhPerHundredkm) {
        this.constantSpeedConsumptionInkWhPerHundredkm = constantSpeedConsumptionInkWhPerHundredkm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currentFuelInLiters")
    public Float currentFuelInLiters;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withCurrentFuelInLiters(Float currentFuelInLiters) {
        this.currentFuelInLiters = currentFuelInLiters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=decelerationEfficiency")
    public Float decelerationEfficiency;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withDecelerationEfficiency(Float decelerationEfficiency) {
        this.decelerationEfficiency = decelerationEfficiency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departAt")
    public String departAt;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withDepartAt(String departAt) {
        this.departAt = departAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=downhillEfficiency")
    public Float downhillEfficiency;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withDownhillEfficiency(Float downhillEfficiency) {
        this.downhillEfficiency = downhillEfficiency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fuelEnergyDensityInMJoulesPerLiter")
    public Float fuelEnergyDensityInMJoulesPerLiter;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withFuelEnergyDensityInMJoulesPerLiter(Float fuelEnergyDensityInMJoulesPerLiter) {
        this.fuelEnergyDensityInMJoulesPerLiter = fuelEnergyDensityInMJoulesPerLiter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hilliness")
    public openapisdk.models.shared.HillinessEnum hilliness;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withHilliness(openapisdk.models.shared.HillinessEnum hilliness) {
        this.hilliness = hilliness;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=instructionsType")
    public openapisdk.models.shared.InstructionsTypeEnum instructionsType;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withInstructionsType(openapisdk.models.shared.InstructionsTypeEnum instructionsType) {
        this.instructionsType = instructionsType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxAlternatives")
    public Long maxAlternatives;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withMaxAlternatives(Long maxAlternatives) {
        this.maxAlternatives = maxAlternatives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minDeviationDistance")
    public Long minDeviationDistance;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withMinDeviationDistance(Long minDeviationDistance) {
        this.minDeviationDistance = minDeviationDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minDeviationTime")
    public Long minDeviationTime;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withMinDeviationTime(Long minDeviationTime) {
        this.minDeviationTime = minDeviationTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report")
    public openapisdk.models.shared.ReportEnum report;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withReport(openapisdk.models.shared.ReportEnum report) {
        this.report = report;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeRepresentation")
    public openapisdk.models.shared.RouteRepresentationEnum routeRepresentation;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withRouteRepresentation(openapisdk.models.shared.RouteRepresentationEnum routeRepresentation) {
        this.routeRepresentation = routeRepresentation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routeType")
    public openapisdk.models.shared.RouteTypeEnum routeType;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withRouteType(openapisdk.models.shared.RouteTypeEnum routeType) {
        this.routeType = routeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sectionType")
    public String sectionType;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withSectionType(String sectionType) {
        this.sectionType = sectionType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=traffic")
    public Boolean traffic;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withTraffic(Boolean traffic) {
        this.traffic = traffic;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travelMode")
    public openapisdk.models.shared.TravelModeEnum travelMode;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withTravelMode(openapisdk.models.shared.TravelModeEnum travelMode) {
        this.travelMode = travelMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uphillEfficiency")
    public Float uphillEfficiency;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withUphillEfficiency(Float uphillEfficiency) {
        this.uphillEfficiency = uphillEfficiency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleAxleWeight")
    public Long vehicleAxleWeight;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withVehicleAxleWeight(Long vehicleAxleWeight) {
        this.vehicleAxleWeight = vehicleAxleWeight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleCommercial")
    public Boolean vehicleCommercial;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withVehicleCommercial(Boolean vehicleCommercial) {
        this.vehicleCommercial = vehicleCommercial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleEngineType")
    public openapisdk.models.shared.VehicleEngineTypeEnum vehicleEngineType;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withVehicleEngineType(openapisdk.models.shared.VehicleEngineTypeEnum vehicleEngineType) {
        this.vehicleEngineType = vehicleEngineType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleHeading")
    public Long vehicleHeading;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withVehicleHeading(Long vehicleHeading) {
        this.vehicleHeading = vehicleHeading;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleHeight")
    public Float vehicleHeight;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withVehicleHeight(Float vehicleHeight) {
        this.vehicleHeight = vehicleHeight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleLength")
    public Float vehicleLength;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withVehicleLength(Float vehicleLength) {
        this.vehicleLength = vehicleLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleLoadType")
    public String vehicleLoadType;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withVehicleLoadType(String vehicleLoadType) {
        this.vehicleLoadType = vehicleLoadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleMaxSpeed")
    public Long vehicleMaxSpeed;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withVehicleMaxSpeed(Long vehicleMaxSpeed) {
        this.vehicleMaxSpeed = vehicleMaxSpeed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleWeight")
    public Long vehicleWeight;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withVehicleWeight(Long vehicleWeight) {
        this.vehicleWeight = vehicleWeight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleWidth")
    public Float vehicleWidth;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withVehicleWidth(Float vehicleWidth) {
        this.vehicleWidth = vehicleWidth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=windingness")
    public openapisdk.models.shared.WindingnessEnum windingness;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams withWindingness(openapisdk.models.shared.WindingnessEnum windingness) {
        this.windingness = windingness;
        return this;
    }
}