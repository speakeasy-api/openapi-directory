import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaxonomiesReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the taxonomy.
     */
    taxonomyId: string;
}
/**
 * The properties of the taxonomy entity.
 */
export declare class TaxonomiesReadTaxonomyAttributes extends SpeakeasyBase {
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
export declare class TaxonomiesReadTaxonomyLinks extends SpeakeasyBase {
    /**
     * An array of links to to this taxonomy's parents. This field is deprecated as of verson 2.4.
     */
    parents?: string[];
    /**
     * A link to the detail page for the taxonomy.
     */
    self?: string;
}
/**
 * OK
 */
export declare class TaxonomiesReadTaxonomy extends SpeakeasyBase {
    /**
     * The properties of the taxonomy entity.
     */
    attributes?: TaxonomiesReadTaxonomyAttributes;
    /**
     * The identifier of the taxonomy entity.
     */
    id?: string;
    /**
     * URLs to alternative representations of the taxonomy entity.
     */
    links?: TaxonomiesReadTaxonomyLinks;
    /**
     * The type identifier of the taxonomy entity (`taxonomies`).
     */
    type?: string;
}
export declare class TaxonomiesReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
