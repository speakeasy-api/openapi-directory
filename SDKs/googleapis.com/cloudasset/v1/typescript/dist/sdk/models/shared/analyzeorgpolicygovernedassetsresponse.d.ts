import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicyConstraint } from "./analyzerorgpolicyconstraint";
import { GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset } from "./googlecloudassetv1analyzeorgpolicygovernedassetsresponsegovernedasset";
/**
 * The response message for AssetService.AnalyzeOrgPolicyGovernedAssets.
 */
export declare class AnalyzeOrgPolicyGovernedAssetsResponse extends SpeakeasyBase {
    /**
     * The organization policy constraint definition.
     */
    constraint?: AnalyzerOrgPolicyConstraint;
    /**
     * The list of the analyzed governed assets.
     */
    governedAssets?: GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset[];
    /**
     * The page token to fetch the next page for AnalyzeOrgPolicyGovernedAssetsResponse.governed_assets.
     */
    nextPageToken?: string;
}
