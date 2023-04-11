import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Metric for computing similarity
 */
export declare enum GetSimCompareMetricEnum {
    Phenodigm = "phenodigm",
    Jaccard = "jaccard",
    SimGIC = "simGIC",
    Resnik = "resnik",
    SymmetricResnik = "symmetric_resnik"
}
export declare class GetSimCompareRequest extends SpeakeasyBase {
    /**
     * set to true if *all* input ids are phenotypic features, else set to false
     */
    isFeatureSet?: boolean;
    /**
     * Metric for computing similarity
     */
    metric?: GetSimCompareMetricEnum;
    /**
     * A phenotype or identifier that is composed of phenotypes (eg disease, gene)
     */
    queryId?: string[];
    /**
     * A phenotype or identifier that is composed of phenotypes (eg disease, gene)
     */
    refId?: string[];
}
export declare class GetSimCompareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    simResult?: shared.SimResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
