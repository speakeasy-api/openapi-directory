import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicySchema } from "./googlechromepolicyversionsv1policyschema";
/**
 * Response message for listing policy schemas that match a filter.
 */
export declare class GoogleChromePolicyVersionsV1ListPolicySchemasResponse extends SpeakeasyBase {
    /**
     * The page token used to get the next page of policy schemas.
     */
    nextPageToken?: string;
    /**
     * The list of policy schemas that match the query.
     */
    policySchemas?: GoogleChromePolicyVersionsV1PolicySchema[];
}
