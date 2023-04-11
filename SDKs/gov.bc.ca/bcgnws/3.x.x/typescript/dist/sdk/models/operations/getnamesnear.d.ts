import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A flag to indicate whether to embed the corresponding 'feature' into each matching name
 */
export declare enum GetNamesNearEmbedEnum {
    Zero = "0",
    One = "1"
}
/**
 * The format of the output.
 */
export declare enum GetNamesNearOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}
/**
 * The EPSG code of the spatial reference system (SRS) to use for output geometries.
 */
export declare enum GetNamesNearOutputSrsEnum {
    FourThousandThreeHundredAndTwentySix = "4326",
    FourThousandTwoHundredAndSixtyNine = "4269",
    ThreeThousandAndFive = "3005",
    ThreeThousandEightHundredAndFiftySeven = "3857",
    TwentySixThousandNineHundredAndSeven = "26907",
    TwentySixThousandNineHundredAndEight = "26908",
    TwentySixThousandNineHundredAndNine = "26909",
    TwentySixThousandNineHundredAndTen = "26910",
    TwentySixThousandNineHundredAndEleven = "26911"
}
/**
 * A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
 */
export declare enum GetNamesNearOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}
/**
 * The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
 */
export declare enum GetNamesNearSortByEnum {
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}
export declare class GetNamesNearRequest extends SpeakeasyBase {
    /**
     * A radius (in kilometres) around the centre point.
     */
    distance: string;
    /**
     * A flag to indicate whether to embed the corresponding 'feature' into each matching name
     */
    embed?: GetNamesNearEmbedEnum;
    /**
     * A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
     */
    featureCategory?: string;
    /**
     * A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
     */
    featureClass?: string;
    /**
     * A geographic coordinate specifying the centre point of the search area.  Must be specified as a string of the form 'longitude,latitude' (WGS84).  e.g. -120,51
     */
    featurePoint: string;
    /**
     * A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
     */
    featureType?: string;
    /**
     * The number of search results to return (1-200)
     */
    itemsPerPage?: number;
    /**
     * The format of the output.
     */
    outputFormat: GetNamesNearOutputFormatEnum;
    /**
     * The EPSG code of the spatial reference system (SRS) to use for output geometries.
     */
    outputSRS?: GetNamesNearOutputSrsEnum;
    /**
     * A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
     */
    outputStyle?: GetNamesNearOutputStyleEnum;
    /**
     * The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
     */
    sortBy?: GetNamesNearSortByEnum;
    /**
     * The index of the first record to be returned (>= 1)
     */
    startIndex?: number;
}
export declare class GetNamesNearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
