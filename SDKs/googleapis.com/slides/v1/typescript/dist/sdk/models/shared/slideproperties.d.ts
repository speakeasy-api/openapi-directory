import { SpeakeasyBase } from "../../../internal/utils";
import { Page } from "./page";
/**
 * The properties of Page that are only relevant for pages with page_type SLIDE.
 */
export declare class SlideProperties extends SpeakeasyBase {
    /**
     * Whether the slide is skipped in the presentation mode. Defaults to false.
     */
    isSkipped?: boolean;
    /**
     * The object ID of the layout that this slide is based on. This property is read-only.
     */
    layoutObjectId?: string;
    /**
     * The object ID of the master that this slide is based on. This property is read-only.
     */
    masterObjectId?: string;
    /**
     * A page in a presentation.
     */
    notesPage?: Page;
}
