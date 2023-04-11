import { SpeakeasyBase } from "../../../internal/utils";
import { Placeholder } from "./placeholder";
/**
 * The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.
 */
export declare class LayoutPlaceholderIdMapping extends SpeakeasyBase {
    /**
     * The placeholder information that uniquely identifies a placeholder shape.
     */
    layoutPlaceholder?: Placeholder;
    /**
     * The object ID of the placeholder on a layout that will be applied to a slide.
     */
    layoutPlaceholderObjectId?: string;
    /**
     * A user-supplied object ID for the placeholder identified above that to be created onto a slide. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
     */
    objectId?: string;
}
