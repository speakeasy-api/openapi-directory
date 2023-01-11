import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSimSearchMetricEnum {
    Phenodigm = "phenodigm",
    Jaccard = "jaccard",
    SimGic = "simGIC",
    Resnik = "resnik",
    SymmetricResnik = "symmetric_resnik"
}
export declare class GetSimSearchQueryParams extends SpeakeasyBase {
    id?: string[];
    isFeatureSet?: boolean;
    limit?: number;
    metric?: GetSimSearchMetricEnum;
    taxon?: string;
}
export declare class GetSimSearchRequest extends SpeakeasyBase {
    queryParams: GetSimSearchQueryParams;
}
export declare class GetSimSearchResponse extends SpeakeasyBase {
    contentType: string;
    simResult?: shared.SimResult;
    statusCode: number;
}
