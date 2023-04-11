import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the network data provider. Either use [`openstreetmap`](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) (default) or [`tomtom`](#section/Map-Data-and-Routing-Profiles/TomTom) (add-on required).
 */
export declare enum VehicleTypeNetworkDataProviderEnum {
    Openstreetmap = "openstreetmap",
    Tomtom = "tomtom"
}
/**
 * Specifies the vehicle profile of this type. The profile is used to determine the network, speed and other physical attributes to use for routing the vehicle.
 */
export declare enum VehicleTypeProfileEnum {
    Car = "car",
    Bike = "bike",
    Foot = "foot",
    Hike = "hike",
    Mtb = "mtb",
    Racingbike = "racingbike",
    Scooter = "scooter",
    Truck = "truck",
    SmallTruck = "small_truck"
}
export declare class VehicleType extends SpeakeasyBase {
    /**
     * Specifies an array of capacity dimension values which need to be int values. For example, if there are two dimensions such as volume and weight then it needs to be defined as [ 1000, 300 ] assuming a maximum volume of 1000 and a maximum weight of 300.
     */
    capacity?: number[];
    /**
     * Specifies whether traffic should be considered. if "tomtom" is used and this is false, free flow travel times from "tomtom" are calculated. If this is true, historical traffic info are used. We do not yet have traffic data for "openstreetmap", thus, setting this true has no effect at all.
     */
    considerTraffic?: boolean;
    /**
     * **_BETA feature_**! Cost parameter vehicle activation, i.e. fixed costs per vehicle
     */
    costPerActivation?: number;
    /**
     * **_BETA feature_**! Cost parameter per distance unit, here meter is used
     */
    costPerMeter?: number;
    /**
     * **_BETA feature_**! Cost parameter per time unit, here second is used
     */
    costPerSecond?: number;
    /**
     * Specifies the network data provider. Either use [`openstreetmap`](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) (default) or [`tomtom`](#section/Map-Data-and-Routing-Profiles/TomTom) (add-on required).
     */
    networkDataProvider?: VehicleTypeNetworkDataProviderEnum;
    profile?: VehicleTypeProfileEnum;
    /**
     * Specifies a service time factor for this vehicle type. If the vehicle/driver that uses this type is able to conduct the service as double as fast as it is determined in the corresponding service or shipment then set it to 0.5.
     */
    serviceTimeFactor?: number;
    /**
     * Specifies a speed factor for this vehicle type. If the vehicle that uses this type needs to be only half as fast as what is actually calculated with our routing engine then set the speed factor to 0.5.
     */
    speedFactor?: number;
    /**
     * Specifies the id of the vehicle type. If a vehicle needs to be of this type, it should refer to this with its type_id attribute.
     */
    typeId: string;
}
