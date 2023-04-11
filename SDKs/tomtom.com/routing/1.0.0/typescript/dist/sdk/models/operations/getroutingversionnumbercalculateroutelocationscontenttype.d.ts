import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest extends SpeakeasyBase {
    /**
     * Specifies the efficiency of converting chemical energy stored in fuel to kinetic energy when the vehicle accelerates (i.e. KineticEnergyGained/ChemicalEnergyConsumed).
     */
    accelerationEfficiency?: number;
    /**
     * Determines whether the alternative routes to be calculated should be better with respect to the planning criteria provided than the reference route.
     */
    alternativeType?: shared.AlternativeTypeEnum;
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
     *   - alreadyUsedRoads
     */
    avoid?: string;
    /**
     * Specifies the jsonp callback method.
     */
    callback?: string;
    /**
     * Re-order the route waypoints to reduce the route length.
     */
    computeBestOrder?: boolean;
    /**
     * Specifies whether to return additional travel times using different types of traffic information (none, historic, live) as well as the default best-estimate travel time.
     */
    computeTravelTimeFor?: shared.ComputeTravelTimeForEnum;
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
     * Specifies the amount of chemical energy stored in one liter of fuel in megajoules (MJ).
     */
    fuelEnergyDensityInMJoulesPerLiter?: number;
    /**
     * Degree of hilliness for calculating a thrilling route.
     */
    hilliness?: shared.HillinessEnum;
    /**
     * If specified, guidance instructions will be returned (if available).
     */
    instructionsType?: shared.InstructionsTypeEnum;
    /**
     * The language parameter determines the language of the guidance messages.
     */
    language?: string;
    /**
     * Locations through which the calculated route must pass.
     */
    locations: string;
    /**
     * Number of alternative routes to be calculated.
     */
    maxAlternatives?: number;
    /**
     * All alternative routes will follow the reference route for the specified minimum number of meters starting from the origin point.
     */
    minDeviationDistance?: number;
    /**
     * All alternative routes will follow the reference route for the specified minimum number of seconds starting from the origin point.
     */
    minDeviationTime?: number;
    /**
     * Specifies which data should be reported for diagnosis purposes.
     */
    report?: shared.ReportEnum;
    /**
     * Specifies the representation of the set of routes provided as a response.
     */
    routeRepresentation?: shared.RouteRepresentationEnum;
    /**
     * The type of route requested.
     */
    routeType?: shared.RouteTypeEnum;
    /**
     * Specifies which section types are explicitly reported in the route response. Can be specified multiple times.
     *
     * @remarks
     *   - carTrain, ferry, tunnel or motorway
     *   - pedestrian
     *   - tollRoad
     *   - tollVignette
     *   - country
     *   - travelMode
     *   - traffic
     */
    sectionType?: string;
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
    vehicleEngineType?: shared.VehicleEngineTypeEnum;
    /**
     * The directional heading of the vehicle in degrees. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.).
     */
    vehicleHeading?: number;
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
export declare class GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
