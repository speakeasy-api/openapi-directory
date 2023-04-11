import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Engine type of the vehicle.
 */
export declare enum GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum {
    Combustion = "combustion",
    Electric = "electric"
}
export declare class GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest extends SpeakeasyBase {
    /**
     * Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).
     */
    accelerationEfficiency?: number;
    /**
     * The date and time of arrival at the destination point. It must be specified as a dateTime.
     */
    arriveAt?: string;
    /**
     * Specifies the amount of fuel consumed for sustaining auxiliary systems of the vehicle, in liters per hour.
     */
    auxiliaryPowerInLitersPerHour?: number;
    /**
     * Specifies whether the routing engine should try to avoid specific types of road segment when calculating the route. Can be specified multiple times.
     *
     * @remarks
     * Possible values:
     *   - tollRoads
     *   - motorways
     *   - ferries
     *   - unpavedRoads
     *   - carpools
     */
    avoid?: string;
    /**
     * Specifies the jsonp callback method.
     */
    callback?: string;
    /**
     * Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.
     */
    constantSpeedConsumptionInLitersPerHundredkm?: string;
    /**
     * Specifies the speed-dependent component of consumption. Provided as an unordered list of speed/consumption-rate pairs.
     */
    constantSpeedConsumptionInkWhPerHundredkm?: string;
    /**
     * The content type of the response structure. If the content type is jsonp, a callback method can be specified in the query parameters.
     */
    contentType: shared.ContentTypeEnum;
    /**
     * Specifies the current supply of fuel in liters.
     */
    currentFuelInLiters?: number;
    /**
     * Specifies the efficiency of converting kinetic energy to saved (not consumed) fuel when the vehicle decelerates (i.e. ChemicalEnergySaved/KineticEnergyLost).
     */
    decelerationEfficiency?: number;
    /**
     * The date and time of departure from the origin point. Departure times apart from <i>now</i> must be specified as a dateTime.
     */
    departAt?: string;
    /**
     * Specifies the efficiency of converting potential energy to saved (not consumed) fuel when the vehicle loses elevation (i.e. ChemicalEnergySaved/PotentialEnergyLost).
     */
    downhillEfficiency?: number;
    /**
     * Electric energy budget in kilowatt hours (kWh). Determines the maximum vehicle range using the specified Electric Consumption Model.
     */
    energyBudgetInkWh?: number;
    /**
     * Fuel budget in liters. Determines the maximum vehicle range using the specified Combustion Consumption Model.
     */
    fuelBudgetInLiters?: number;
    /**
     * Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).
     */
    fuelEnergyDensityInMJoulesPerLiter?: number;
    /**
     * Degree of hilliness for calculating a thrilling route.
     */
    hilliness?: shared.HillinessEnum;
    /**
     * Point from which the range calculation should start.
     */
    origin: string;
    /**
     * Specifies which data should be reported for diagnosis purposes.
     */
    report?: shared.ReportEnum;
    /**
     * The type of route requested.
     */
    routeType?: shared.RouteTypeEnum;
    /**
     * Time budget in seconds. Determines the maximum vehicle range using the specified driving time. The consumption parameters in the request will only affect eco-routes, and thereby indirectly the driving time.
     */
    timeBudgetInSec?: number;
    /**
     * Determines whether current traffic is used in route calculations. Note that information on historic road speeds is always used.
     */
    traffic?: boolean;
    /**
     * The mode of travel for the requested route.
     */
    travelMode?: shared.TravelModeEnum;
    /**
     * Specifies the efficiency of converting chemical energy stored in fuel to potential energy when the vehicle gains elevation (i.e. PotentialEnergyGained/ChemicalEnergyConsumed).
     */
    uphillEfficiency?: number;
    /**
     * Weight per axle of the vehicle in kg.
     */
    vehicleAxleWeight?: number;
    /**
     * Indicates that the vehicle is used for commercial purposes. This means it may not be allowed on certain roads.
     */
    vehicleCommercial?: boolean;
    /**
     * Engine type of the vehicle.
     */
    vehicleEngineType?: GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum;
    /**
     * Height of the vehicle in meters.
     */
    vehicleHeight?: number;
    /**
     * Length of the vehicle in meters.
     */
    vehicleLength?: number;
    /**
     * Indicates what kinds of hazardous materials the vehicle is carrying (if any). This means it may not be allowed on certain roads.
     *
     * @remarks
     * Use these for routing in the US:
     *
     *   - <i>USHazmatClass1</i> Explosives
     *   - <i>USHazmatClass2</i> Compressed gas
     *   - <i>USHazmatClass3</i> Flammable liquids
     *   - <i>USHazmatClass4</i> Flammable solids
     *   - <i>USHazmatClass5</i> Oxidizers
     *   - <i>USHazmatClass6</i> Poisons
     *   - <i>USHazmatClass7</i> Radioactive
     *   - <i>USHazmatClass8</i> Corrosives
     *   - <i>USHazmatClass9</i> Miscellaneous
     *
     * Use these for routing in all other countries:
     *
     *   - <i>otherHazmatExplosive</i> Explosives
     *   - <i>otherHazmatGeneral</i> Miscellaneous
     *   - <i>otherHazmatHarmfulToWater</i> Harmful to water
     *
     * vehicleLoadType can be specified multiple times. This parameter is currently only considered for <b>travelMode</b>=<i>truck</i>.
     */
    vehicleLoadType?: string;
    /**
     * Maximum speed of the vehicle in km/hour.
     */
    vehicleMaxSpeed?: number;
    /**
     * Weight of the vehicle in kilograms.
     */
    vehicleWeight?: number;
    /**
     * Width of the vehicle in meters.
     */
    vehicleWidth?: number;
    /**
     * Service version number. The current value is 1.
     */
    versionNumber: shared.VersionNumberEnum;
    /**
     * Amount that a thrilling route should wind.
     */
    windingness?: shared.WindingnessEnum;
}
export declare class GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
