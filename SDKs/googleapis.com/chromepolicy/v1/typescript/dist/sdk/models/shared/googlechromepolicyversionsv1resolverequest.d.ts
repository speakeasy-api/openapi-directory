import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
/**
 * Request message for getting the resolved policy value for a specific target.
 */
export declare class GoogleChromePolicyVersionsV1ResolveRequest extends SpeakeasyBase {
    /**
     * The maximum number of policies to return, defaults to 100 and has a maximum of 1000.
     */
    pageSize?: number;
    /**
     * The page token used to retrieve a specific page of the request.
     */
    pageToken?: string;
    /**
     * Required. The schema filter to apply to the resolve request. Specify a schema name to view a particular schema, for example: chrome.users.ShowLogoutButton Wildcards are supported, but only in the leaf portion of the schema name. Wildcards cannot be used in namespace directly. Please read https://developers.google.com/chrome/policy/guides/policy-schemas for details on schema namespaces. For example: Valid: "chrome.users.*", "chrome.users.apps.*", "chrome.printers.*" Invalid: "*", "*.users", "chrome.*", "chrome.*.apps.*"
     */
    policySchemaFilter?: string;
    /**
     * The key used to identify the target on which the policy will be applied.
     */
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
