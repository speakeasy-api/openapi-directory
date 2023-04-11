import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedText } from "./localizedtext";
/**
 * Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.
 */
export declare class StoreCluster extends SpeakeasyBase {
    /**
     * Unique ID of this cluster. Assigned by the server. Immutable once assigned.
     */
    id?: string;
    /**
     * Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.
     */
    name?: LocalizedText[];
    /**
     * String (US-ASCII only) used to determine order of this cluster within the parent page's elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined. The value of this field is never visible to a user, it is used solely for the purpose of defining an ordering. Maximum length is 256 characters.
     */
    orderInPage?: string;
    /**
     * List of products in the order they are displayed in the cluster. There should not be duplicates within a cluster.
     */
    productId?: string[];
}
