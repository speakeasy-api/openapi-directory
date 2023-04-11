import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.
 */
export declare class Tag extends SpeakeasyBase {
    /**
     * The fingerprint of the tag. Required for updating the list of tags.
     */
    fingerPrint?: string;
    /**
     * Items contained in this tag.
     */
    items?: string[];
}
