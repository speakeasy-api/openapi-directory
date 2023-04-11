import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * to override content negotiation specify a value of json or xml
 */
export declare enum MetalsBenchmarkSummaryGETFormatEnum {
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
export declare enum MetalsBenchmarkSummaryGETUnitofmeasureEnum {
    Mg = "mg",
    G = "g",
    Kg = "kg",
    Gr = "gr",
    Oz = "oz",
    Toz = "toz",
    Ct = "ct",
    Dwt = "dwt"
}
export declare class MetalsBenchmarkSummaryGETRequest extends SpeakeasyBase {
    /**
     * comma separated list of conversion currencies, defaults to USD
     */
    currency?: string;
    /**
     * to override content negotiation specify a value of json or xml
     */
    format?: MetalsBenchmarkSummaryGETFormatEnum;
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
    unitofmeasure?: MetalsBenchmarkSummaryGETUnitofmeasureEnum;
}
export declare class MetalsBenchmarkSummaryGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    summaryResponses?: shared.SummaryResponse[];
}
