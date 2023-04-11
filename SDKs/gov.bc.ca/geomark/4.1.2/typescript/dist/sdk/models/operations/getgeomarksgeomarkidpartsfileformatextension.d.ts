import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The file format name extension used to represent the geomark download.
 */
export declare enum GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Kmz = "kmz",
    Shp = "shp",
    Shpz = "shpz",
    Geojson = "geojson",
    Gml = "gml",
    Gpkg = "gpkg",
    Wkt = "wkt"
}
/**
 * The srid of the coordinate system the geometry should be converted to.
 */
export declare enum GetGeomarksGeomarkIdPartsFileFormatExtensionSridEnum {
    FourThousandThreeHundredAndTwentySix = "4326",
    ThreeThousandAndFive = "3005",
    ThreeThousandEightHundredAndFiftySeven = "3857",
    TwentySixThousandNineHundredAndSeven = "26907",
    TwentySixThousandNineHundredAndEight = "26908",
    TwentySixThousandNineHundredAndNine = "26909",
    TwentySixThousandNineHundredAndTen = "26910",
    TwentySixThousandNineHundredAndEleven = "26911"
}
export declare class GetGeomarksGeomarkIdPartsFileFormatExtensionRequest extends SpeakeasyBase {
    /**
     * The file format name extension used to represent the geomark download.
     */
    fileFormatExtension: GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum;
    /**
     * The unique identifier for the geomark
     */
    geomarkId: string;
    /**
     * The srid of the coordinate system the geometry should be converted to.
     */
    srid?: GetGeomarksGeomarkIdPartsFileFormatExtensionSridEnum;
}
export declare class GetGeomarksGeomarkIdPartsFileFormatExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
