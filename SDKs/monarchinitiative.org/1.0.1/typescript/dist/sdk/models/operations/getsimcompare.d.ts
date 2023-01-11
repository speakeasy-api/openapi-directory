import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSimCompareMetricEnum {
    Phenodigm = "phenodigm",
    Jaccard = "jaccard",
    SimGic = "simGIC",
    Resnik = "resnik",
    SymmetricResnik = "symmetric_resnik"
}
export declare class GetSimCompareQueryParams extends SpeakeasyBase {
    isFeatureSet?: boolean;
    metric?: GetSimCompareMetricEnum;
    queryId?: string[];
    refId?: string[];
}
export declare class GetSimCompareRequest extends SpeakeasyBase {
    queryParams: GetSimCompareQueryParams;
}
export declare class GetSimCompareResponse extends SpeakeasyBase {
    contentType: string;
    simResult?: shared.SimResult;
    statusCode: number;
}
