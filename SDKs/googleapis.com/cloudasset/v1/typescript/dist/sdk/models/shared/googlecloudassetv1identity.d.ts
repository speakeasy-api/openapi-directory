import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";
/**
 * An identity under analysis.
 */
export declare class GoogleCloudAssetV1Identity extends SpeakeasyBase {
    /**
     * Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.
     */
    analysisState?: IamPolicyAnalysisState;
    /**
     * The identity name in any form of members appear in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding), such as: - user:foo@google.com - group:group1@google.com - serviceAccount:s1@prj1.iam.gserviceaccount.com - projectOwner:some_project_id - domain:google.com - allUsers - etc.
     */
    name?: string;
}
