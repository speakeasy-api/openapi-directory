import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Metric for computing similarity
 */
export declare enum GetSimSearchMetricEnum {
    Phenodigm = "phenodigm",
    Jaccard = "jaccard",
    SimGIC = "simGIC",
    Resnik = "resnik",
    SymmetricResnik = "symmetric_resnik"
}
export declare class GetSimSearchRequest extends SpeakeasyBase {
    /**
     * A phenotype or identifier that is composed of phenotypes (eg disease, gene)
     */
    id?: string[];
    /**
     * set to true if *all* input ids are phenotypic features, else set to false
     */
    isFeatureSet?: boolean;
    /**
     * number of rows, max 500
     */
    limit?: number;
    /**
     * Metric for computing similarity
     */
    metric?: GetSimSearchMetricEnum;
    /**
     * ncbi taxon id
     */
    taxon?: string;
}
export declare class GetSimSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    simResult?: shared.SimResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
