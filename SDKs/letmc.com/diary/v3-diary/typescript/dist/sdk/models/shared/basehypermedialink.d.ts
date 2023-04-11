import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Hypermedia Link Class
 */
export declare class BaseHypermediaLink extends SpeakeasyBase {
    /**
     * The hypermedia href
     */
    href?: string;
    /**
     * The http method type
     */
    method?: string;
    /**
     * The hypermedia link relationship to current result object.
     */
    relationship?: string;
}
