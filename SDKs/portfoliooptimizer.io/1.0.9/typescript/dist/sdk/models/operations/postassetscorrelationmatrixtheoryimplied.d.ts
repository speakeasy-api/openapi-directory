import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetHierarchicalClassification[i] is the i+1-th level of the hierarchical classification of the asset, from the most generic classification to the most specific classification; all the assetHierarchicalClassification arrays must have the same length
     */
    assetHierarchicalClassification: any[];
}
/**
 * The hierarchical clustering method to use
 */
export declare enum PostAssetsCorrelationMatrixTheoryImpliedRequestBodyClusteringMethodEnum {
    SingleLinkage = "singleLinkage",
    AverageLinkage = "averageLinkage",
    CompleteLinkage = "completeLinkage",
    WardLinkage = "wardLinkage"
}
export declare class PostAssetsCorrelationMatrixTheoryImpliedRequestBody extends SpeakeasyBase {
    assets: PostAssetsCorrelationMatrixTheoryImpliedRequestBodyAssets[];
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
    /**
     * The hierarchical clustering method to use
     */
    clusteringMethod?: PostAssetsCorrelationMatrixTheoryImpliedRequestBodyClusteringMethodEnum;
}
/**
 * OK
 */
export declare class PostAssetsCorrelationMatrixTheoryImplied200ApplicationJSON extends SpeakeasyBase {
    /**
     * assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j
     */
    assetsCorrelationMatrix: number[][];
}
export declare class PostAssetsCorrelationMatrixTheoryImpliedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsCorrelationMatrixTheoryImplied200ApplicationJSONObject?: PostAssetsCorrelationMatrixTheoryImplied200ApplicationJSON;
}
