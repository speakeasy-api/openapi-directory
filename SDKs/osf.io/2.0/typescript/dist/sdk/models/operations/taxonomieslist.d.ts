import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The properties of the taxonomy entity.
 */
export declare class TaxonomiesListTaxonomyAttributes extends SpeakeasyBase {
    /**
     * The number of children this taxonomy contains.
     */
    childCount?: number;
    /**
     * An array of JSON objects containing keys for `text` (name) and `id` (unique identifier) of this taxonomy's parents
     */
    parents?: string[];
    /**
     * The text name of the taxonomy
     */
    text?: string;
}
/**
 * URLs to alternative representations of the taxonomy entity.
 */
export declare class TaxonomiesListTaxonomyLinks extends SpeakeasyBase {
    /**
     * An array of links to to this taxonomy's parents. This field is deprecated as of verson 2.4.
     */
    parents?: string[];
    /**
     * A link to the detail page for the taxonomy.
     */
    self?: string;
}
export declare class TaxonomiesListTaxonomy extends SpeakeasyBase {
    /**
     * The properties of the taxonomy entity.
     */
    attributes?: TaxonomiesListTaxonomyAttributes;
    /**
     * The identifier of the taxonomy entity.
     */
    id?: string;
    /**
     * URLs to alternative representations of the taxonomy entity.
     */
    links?: TaxonomiesListTaxonomyLinks;
    /**
     * The type identifier of the taxonomy entity (`taxonomies`).
     */
    type?: string;
}
export declare class TaxonomiesListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
