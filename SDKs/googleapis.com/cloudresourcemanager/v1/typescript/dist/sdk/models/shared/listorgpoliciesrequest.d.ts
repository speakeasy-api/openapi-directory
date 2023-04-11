import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request sent to the ListOrgPolicies method.
 */
export declare class ListOrgPoliciesRequest extends SpeakeasyBase {
    /**
     * Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
     */
    pageSize?: number;
    /**
     * Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
     */
    pageToken?: string;
}
