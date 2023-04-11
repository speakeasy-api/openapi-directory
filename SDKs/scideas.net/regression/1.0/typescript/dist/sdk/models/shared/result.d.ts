import { SpeakeasyBase } from "../../../internal/utils";
import { ResultCalls } from "./resultcalls";
import { ResultStandardizedCoefficients } from "./resultstandardizedcoefficients";
export declare class Result extends SpeakeasyBase {
    calls?: ResultCalls;
    /**
     * number of data rows processed
     */
    dataCount?: number;
    /**
     * either month or week
     */
    datesConvertedTo?: string;
    /**
     * text for pdf footer
     */
    footer?: string;
    /**
     * text for pdf header
     */
    header?: string;
    /**
     * number of data rows used for analysis
     */
    numberObservations?: number;
    /**
     * number of data rows used to test model accuracy
     */
    numberTests?: number;
    /**
     * the name of the variable processed as the outcome
     */
    outcomeVariable?: string;
    /**
     * yes if paid subscriber, otherwise no
     */
    paid?: string;
    /**
     * url of pdf summary
     */
    pdf?: string;
    /**
     * percentage accuracy of model created
     */
    predictionMeanAccuracy?: number;
    standardizedCoefficients?: ResultStandardizedCoefficients[];
    summary?: Record<string, any>[];
    testedVariables?: string[];
}
