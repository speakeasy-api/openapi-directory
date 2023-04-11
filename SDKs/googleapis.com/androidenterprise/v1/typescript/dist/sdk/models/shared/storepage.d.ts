import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedText } from "./localizedtext";
/**
 * Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.
 */
export declare class StorePage extends SpeakeasyBase {
    /**
     * Unique ID of this page. Assigned by the server. Immutable once assigned.
     */
    id?: string;
    /**
     * Ordered list of pages a user should be able to reach from this page. The list can't include this page. It is recommended that the basic pages are created first, before adding the links between pages. The API doesn't verify that the pages exist or the pages are reachable.
     */
    link?: string[];
    /**
     * Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.
     */
    name?: LocalizedText[];
}
