import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A flag to indicate whether to embed the corresponding 'feature' into each matching name
 */
export declare enum GetNamesDecisionsYearEmbedEnum {
    Zero = "0",
    One = "1"
}
/**
 * The format of the output.
 */
export declare enum GetNamesDecisionsYearOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}
/**
 * The EPSG code of the spatial reference system (SRS) to use for output geometries.
 */
export declare enum GetNamesDecisionsYearOutputSrsEnum {
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
export declare enum GetNamesDecisionsYearOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}
/**
 * The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
 */
export declare enum GetNamesDecisionsYearSortByEnum {
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}
export declare class GetNamesDecisionsYearRequest extends SpeakeasyBase {
    /**
     * A flag to indicate whether to embed the corresponding 'feature' into each matching name
     */
    embed?: GetNamesDecisionsYearEmbedEnum;
    /**
     * A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
     */
    featureCategory?: string;
    /**
     * A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
     */
    featureClass?: string;
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
    outputFormat: GetNamesDecisionsYearOutputFormatEnum;
    /**
     * The EPSG code of the spatial reference system (SRS) to use for output geometries.
     */
    outputSRS?: GetNamesDecisionsYearOutputSrsEnum;
    /**
     * A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
     */
    outputStyle?: GetNamesDecisionsYearOutputStyleEnum;
    /**
     * The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
     */
    sortBy?: GetNamesDecisionsYearSortByEnum;
    /**
     * The index of the first record to be returned (>= 1)
     */
    startIndex?: number;
    /**
     * The year in which to search for names affected by naming decisions'.
     */
    year: number;
}
export declare class GetNamesDecisionsYearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
