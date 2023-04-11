import { SpeakeasyBase } from "../../../internal/utils";
export declare class SynonymPropertyValue extends SpeakeasyBase {
    /**
     * predicate (attribute) part
     */
    pred?: string;
    /**
     * value part
     */
    val?: string;
    /**
     * Xrefs provenance for property-value
     */
    xrefs?: string[];
}
