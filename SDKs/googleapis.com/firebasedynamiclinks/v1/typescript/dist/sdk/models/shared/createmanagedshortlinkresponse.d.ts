import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkWarning } from "./dynamiclinkwarning";
import { ManagedShortLink } from "./managedshortlink";
/**
 * Response to create a short Dynamic Link.
 */
export declare class CreateManagedShortLinkResponse extends SpeakeasyBase {
    /**
     * Managed Short Link.
     */
    managedShortLink?: ManagedShortLink;
    /**
     * Preview link to show the link flow chart. (debug info.)
     */
    previewLink?: string;
    /**
     * Information about potential warnings on link creation.
     */
    warning?: DynamicLinkWarning[];
}
