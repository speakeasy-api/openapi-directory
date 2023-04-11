import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicyConstraint } from "./analyzerorgpolicyconstraint";
import { GoogleCloudAssetV1GovernedContainer } from "./googlecloudassetv1governedcontainer";
/**
 * The response message for AssetService.AnalyzeOrgPolicyGovernedContainers.
 */
export declare class AnalyzeOrgPolicyGovernedContainersResponse extends SpeakeasyBase {
    /**
     * The organization policy constraint definition.
     */
    constraint?: AnalyzerOrgPolicyConstraint;
    /**
     * The list of the analyzed governed containers.
     */
    governedContainers?: GoogleCloudAssetV1GovernedContainer[];
    /**
     * The page token to fetch the next page for AnalyzeOrgPolicyGovernedContainersResponse.governed_containers.
     */
    nextPageToken?: string;
}
