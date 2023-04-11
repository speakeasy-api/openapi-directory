import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the type of location this Location is for. Regional or Zonal.
 */
export declare enum LocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED",
    Zone = "ZONE",
    Region = "REGION"
}
/**
 * Location returns the location name, and if the location is recommended for GKE cluster scheduling.
 */
export declare class Location extends SpeakeasyBase {
    /**
     * Contains the name of the resource requested. Specified in the format `projects/* /locations/*`.
     */
    name?: string;
    /**
     * Whether the location is recommended for GKE cluster scheduling.
     */
    recommended?: boolean;
    /**
     * Contains the type of location this Location is for. Regional or Zonal.
     */
    type?: LocationTypeEnum;
}
