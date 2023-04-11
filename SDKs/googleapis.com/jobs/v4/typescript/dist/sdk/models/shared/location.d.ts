import { SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
import { PostalAddress } from "./postaladdress";
/**
 * The type of a location, which corresponds to the address lines field of google.type.PostalAddress. For example, "Downtown, Atlanta, GA, USA" has a type of LocationType.NEIGHBORHOOD, and "Kansas City, KS, USA" has a type of LocationType.LOCALITY.
 */
export declare enum LocationLocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED",
    Country = "COUNTRY",
    AdministrativeArea = "ADMINISTRATIVE_AREA",
    SubAdministrativeArea = "SUB_ADMINISTRATIVE_AREA",
    Locality = "LOCALITY",
    PostalCode = "POSTAL_CODE",
    SubLocality = "SUB_LOCALITY",
    SubLocality1 = "SUB_LOCALITY_1",
    SubLocality2 = "SUB_LOCALITY_2",
    Neighborhood = "NEIGHBORHOOD",
    StreetAddress = "STREET_ADDRESS"
}
/**
 * A resource that represents a location with full geographic information.
 */
export declare class Location extends SpeakeasyBase {
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    latLng?: LatLng;
    /**
     * The type of a location, which corresponds to the address lines field of google.type.PostalAddress. For example, "Downtown, Atlanta, GA, USA" has a type of LocationType.NEIGHBORHOOD, and "Kansas City, KS, USA" has a type of LocationType.LOCALITY.
     */
    locationType?: LocationLocationTypeEnum;
    /**
     * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
     */
    postalAddress?: PostalAddress;
    /**
     * Radius in miles of the job location. This value is derived from the location bounding box in which a circle with the specified radius centered from google.type.LatLng covers the area associated with the job location. For example, currently, "Mountain View, CA, USA" has a radius of 6.17 miles.
     */
    radiusMiles?: number;
}
