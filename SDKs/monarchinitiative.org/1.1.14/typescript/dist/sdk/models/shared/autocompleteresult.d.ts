import { SpeakeasyBase } from "../../../internal/utils";
export declare class AutocompleteResult extends SpeakeasyBase {
    /**
     * node categories
     */
    category?: string[];
    /**
     * Equivalent IDs
     */
    equivalentIds?: string[];
    /**
     * True if highlight can be interpreted as html, else False
     */
    hasHighlight?: boolean;
    /**
     * solr highlight
     */
    highlight?: string;
    /**
     * curie formatted id
     */
    id?: string;
    /**
     * primary label (rdfs:label)
     */
    label?: string[];
    /**
     * matched part of document (may be primary label, synonym, id, etc)
     */
    match?: string;
    /**
     * taxon as NCBITaxon curie
     */
    taxon?: string;
    /**
     * taxon label
     */
    taxonLabel?: string;
}
