import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum MetalsBenchmarkHistoryGETFormatEnum {
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
export declare enum MetalsBenchmarkHistoryGETUnitofmeasureEnum {
    Mg = "mg",
    G = "g",
    Kg = "kg",
    Gr = "gr",
    Oz = "oz",
    Toz = "toz",
    Ct = "ct",
    Dwt = "dwt"
}
export declare class MetalsBenchmarkHistoryGETRequest extends SpeakeasyBase {
    /**
     * comma separated list of conversion currencies, defaults to USD
     */
    currency?: string;
    /**
     * end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.
     */
    end?: Date;
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: MetalsBenchmarkHistoryGETFormatEnum;
    /**
     * if true use historical currency rates otherwise current currency rates. Defaults to true.
     */
    historicalfx?: boolean;
    /**
     * aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified),
     *
     * @remarks
     * followed by a type string which must be one of the following values:
     * y=year,
     * m=month,
     * w=week,
     * d=day,
     * h=hour,
     * mi=minute
     *
     * For example, a yearly interval can be specified as "y" and 6 month interval as "6m".
     *
     * If not specified the interval parameter default is 1 Day.
     */
    interval?: string;
    /**
     * comma separated list of metals
     */
    metals: string;
    /**
     * start date of time period. format is <i>yyyy-mm-dd</i>
     */
    start: Date;
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
    unitofmeasure?: MetalsBenchmarkHistoryGETUnitofmeasureEnum;
}
export declare class MetalsBenchmarkHistoryGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Success
     */
    intervalCollectionResponses?: shared.IntervalCollectionResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
