import { SpeakeasyBase } from "../../../internal/utils";
export declare class Link extends SpeakeasyBase {
    /**
     * Link to actual a resource.
     */
    atHref?: string;
    /**
     * Specifying kind of link such as ‘self’ (link that returned this response), ‘alternate’ (link that points to another resource) or ‘related’ (link that points to related resource).
     */
    atRel?: string;
}
