import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * accessPoint interpolation method. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#interpolation target="_blank">interpolation</a>
 */
export declare enum GetOccupantsAddressesOutputFormatInterpolationEnum {
    Adaptive = "adaptive",
    Linear = "linear",
    None = "none"
}
/**
 * Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
 */
export declare enum GetOccupantsAddressesOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}
/**
 * Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>.
 *
 * @remarks
 *
 * Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)
 */
export declare enum GetOccupantsAddressesOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
/**
 * The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
 */
export declare enum GetOccupantsAddressesOutputFormatOutputSrsEnum {
    FourThousandThreeHundredAndTwentySix = "4326",
    FourThousandTwoHundredAndSixtyNine = "4269",
    ThreeThousandAndFive = "3005",
    TwentySixThousandNineHundredAndSeven = "26907",
    TwentySixThousandNineHundredAndEight = "26908",
    TwentySixThousandNineHundredAndNine = "26909",
    TwentySixThousandNineHundredAndTen = "26910",
    TwentySixThousandNineHundredAndEleven = "26911"
}
/**
 * The abbreviated compass direction as defined by Canada Post and B.C. civic addressing authorities. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetDirection target="_blank">streetDirection</a>
 */
export declare enum GetOccupantsAddressesOutputFormatStreetDirectionEnum {
    N = "N",
    S = "S",
    E = "E",
    W = "W",
    O = "O",
    Ne = "NE",
    No = "NO",
    Nw = "NW",
    Se = "SE",
    So = "SO",
    Sw = "SW"
}
/**
 * The type of unit within a house or building. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#unitDesignator target="_blank">unitDesignator</a>
 */
export declare enum GetOccupantsAddressesOutputFormatUnitDesignatorEnum {
    Apt = "APT",
    Bldg = "BLDG",
    Bsmt = "BSMT",
    Flr = "FLR",
    Lobby = "LOBBY",
    Lwr = "LWR",
    Pad = "PAD",
    Ph = "PH",
    Rear = "REAR",
    Rm = "RM",
    Side = "SIDE",
    Site = "SITE",
    Suite = "SUITE",
    Th = "TH",
    Unit = "UNIT",
    Uppr = "UPPR"
}
export declare class GetOccupantsAddressesOutputFormatRequest extends SpeakeasyBase {
    /**
     * Occupant name OR Occupant name ** address
     */
    addressString?: string;
    /**
     * If true, addressString is expected to contain a partial address that requires completion. Not supported for shp, csv, gml formats.
     */
    autoComplete?: boolean;
    /**
     * Example: -126.07929,49.7628,-126.0163,49.7907.  A bounding box (xmin,ymin,xmax,ymax) that limits the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>
     */
    bbox?: string;
    /**
     * If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
     */
    brief?: boolean;
    /**
     * Example: -124.0165926,49.2296251 .  The coordinates of a centre point (x,y) used to define a bounding circle that will limit the search area. This parameter must be specified together with 'maxDistance'. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#centre target='_blank'>centre</a>
     */
    centre?: string;
    /**
     * The official number assigned to a site by an address authority. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#civicNumber target="_blank">civicNumber</a>
     */
    civicNumber?: string;
    /**
     * A letter or fraction that follows the civic number (e.g., the A in 1039A Bledsoe St). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#civicNumberSuffix target="_blank">civicNumberSuffix</a>
     */
    civicNumberSuffix?: string;
    /**
     * If true, include unmatched address details such as site name in results.
     */
    echo?: boolean;
    /**
     * If true, uses supplied parcelPoint to derive an appropriate accessPoint.           See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#extrapolate target="_blank">extrapolate</a>
     */
    extrapolate?: boolean;
    /**
     * accessPoint interpolation method. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#interpolation target="_blank">interpolation</a>
     */
    interpolation?: GetOccupantsAddressesOutputFormatInterpolationEnum;
    /**
     * A comma separated list of locality names that matched addresses must belong to. For example, setting localities to Nanaimo only returns addresses in Nanaimo
     */
    localities?: string;
    /**
     * The name of the locality assigned to a given site by an address authority. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetDirection target="_blank">streetDirection</a>
     */
    localityName?: string;
    /**
     * Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
     */
    locationDescriptor?: GetOccupantsAddressesOutputFormatLocationDescriptorEnum;
    /**
     * Example: street,locality.  A comma separated list of individual match precision levels to include in results. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#matchPrecision target="_blank">matchPrecision</a>
     */
    matchPrecision?: string;
    /**
     * Example: street,locality.  A comma separated list of individual match precision levels to exclude from results. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#matchPrecisionNot target="_blank">matchPrecisionNot</a>
     */
    matchPrecisionNot?: string;
    /**
     * The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
     */
    maxDistance?: number;
    /**
     * The maximum number of search results to return.
     */
    maxResults?: number;
    /**
     * The minimum score required for a match to be returned. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#minScore target="_blank">minScore</a>
     */
    minScore?: number;
    /**
     * A comma-separated list of localities to exclude from the search.
     */
    notLocalities?: string;
    /**
     * Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>.
     *
     * @remarks
     *
     * Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)
     */
    outputFormat: GetOccupantsAddressesOutputFormatOutputFormatEnum;
    /**
     * The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
     */
    outputSRS?: GetOccupantsAddressesOutputFormatOutputSrsEnum;
    /**
     * The coordinates of a point (x,y) known to be inside the parcel containing a given address. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#parcelPoint target="_blank">parcelPoint</a>
     */
    parcelPoint?: string;
    /**
     * The ISO 3166-2 Sub-Country Code. The code for British Columbia is BC.
     */
    provinceCode?: string;
    /**
     * The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
     */
    setBack?: number;
    /**
     * A string containing the name of the building, facility, or institution (e.g., Duck Building, Casa Del Mar, Crystal Garden, Bluebird House).See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#siteName target="_blank">siteName</a>
     */
    siteName?: string;
    /**
     * The abbreviated compass direction as defined by Canada Post and B.C. civic addressing authorities. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetDirection target="_blank">streetDirection</a>
     */
    streetDirection?: GetOccupantsAddressesOutputFormatStreetDirectionEnum;
    /**
     * The official name of the street as assigned by an address authority (e.g., the Douglas in 1175 Douglas Street). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetName target="_blank">streetName</a>
     */
    streetName?: string;
    /**
     * The qualifier of a street name (e.g., the Bridge in Johnson St Bridge)
     */
    streetQualifier?: string;
    /**
     * The type of street as assigned by a municipality (e.g., the ST in 1175 DOUGLAS St). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetType target="_blank">streetType</a>
     */
    streetType?: string;
    /**
     * Example: schools;courts;employment<br>A list of tags separated by semicolons.
     */
    tags?: string;
    /**
     * The type of unit within a house or building. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#unitDesignator target="_blank">unitDesignator</a>
     */
    unitDesignator?: GetOccupantsAddressesOutputFormatUnitDesignatorEnum;
    /**
     * The number of the unit, suite, or apartment within a house or building.
     */
    unitNumber?: string;
    /**
     * A letter that follows the unit number as in Unit 1A or Suite 302B.
     */
    unitNumberSuffix?: string;
}
export declare class GetOccupantsAddressesOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
