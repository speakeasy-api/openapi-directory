import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum MetalsSpotAnnualHistoricalPerformanceGETFormatEnum {
    Json = "json",
    Xml = "xml"
}
/**
 * unit of meaure, defaults to troy ounces. allowed values are:
 *
 * @remarks
 * mg=milligram
 * g=gram
 * kg=kilogram
 * gr=grain
 * oz=ounce
 * toz=troy ounce
 * ct=carat
 * dwt=pennyweight
 */
export declare enum MetalsSpotAnnualHistoricalPerformanceGETUnitofmeasureEnum {
    Mg = "mg",
    G = "g",
    Kg = "kg",
    Gr = "gr",
    Oz = "oz",
    Toz = "toz",
    Ct = "ct",
    Dwt = "dwt"
}
export declare class MetalsSpotAnnualHistoricalPerformanceGETRequest extends SpeakeasyBase {
    /**
     * comma separated list of conversion currencies, defaults to USD
     */
    currency?: string;
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: MetalsSpotAnnualHistoricalPerformanceGETFormatEnum;
    /**
     * comma separated list of metals
     */
    metals: string;
    /**
     * unit of meaure, defaults to troy ounces. allowed values are:
     *
     * @remarks
     * mg=milligram
     * g=gram
     * kg=kilogram
     * gr=grain
     * oz=ounce
     * toz=troy ounce
     * ct=carat
     * dwt=pennyweight
     */
    unitofmeasure?: MetalsSpotAnnualHistoricalPerformanceGETUnitofmeasureEnum;
    /**
     * Number of years of history to return. Defaults to 10.
     */
    years?: number;
}
export declare class MetalsSpotAnnualHistoricalPerformanceGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Success
     */
    intervalCollectionResponses?: shared.IntervalCollectionResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
