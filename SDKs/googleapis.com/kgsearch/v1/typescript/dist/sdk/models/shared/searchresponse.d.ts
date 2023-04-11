import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message includes the context and a list of matching results which contain the detail of associated entities.
 */
export declare class SearchResponse extends SpeakeasyBase {
    /**
     * The local context applicable for the response. See more details at http://www.w3.org/TR/json-ld/#context-definitions.
     */
    atContext?: any;
    /**
     * The schema type of top-level JSON-LD object, e.g. ItemList.
     */
    atType?: any;
    /**
     * The item list of search results.
     */
    itemListElement?: any[];
}
