import { SpeakeasyBase } from "../../../internal/utils";
import { LayoutProperties } from "./layoutproperties";
import { MasterProperties } from "./masterproperties";
import { NotesProperties } from "./notesproperties";
import { PageElement } from "./pageelement";
import { PageProperties } from "./pageproperties";
import { SlideProperties } from "./slideproperties";
/**
 * The type of the page.
 */
export declare enum PagePageTypeEnum {
    Slide = "SLIDE",
    Master = "MASTER",
    Layout = "LAYOUT",
    Notes = "NOTES",
    NotesMaster = "NOTES_MASTER"
}
/**
 * A page in a presentation.
 */
export declare class Page extends SpeakeasyBase {
    /**
     * The properties of Page are only relevant for pages with page_type LAYOUT.
     */
    layoutProperties?: LayoutProperties;
    /**
     * The properties of Page that are only relevant for pages with page_type MASTER.
     */
    masterProperties?: MasterProperties;
    /**
     * The properties of Page that are only relevant for pages with page_type NOTES.
     */
    notesProperties?: NotesProperties;
    /**
     * The object ID for this page. Object IDs used by Page and PageElement share the same namespace.
     */
    objectId?: string;
    /**
     * The page elements rendered on the page.
     */
    pageElements?: PageElement[];
    /**
     * The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties.
     */
    pageProperties?: PageProperties;
    /**
     * The type of the page.
     */
    pageType?: PagePageTypeEnum;
    /**
     * Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes.
     */
    revisionId?: string;
    /**
     * The properties of Page that are only relevant for pages with page_type SLIDE.
     */
    slideProperties?: SlideProperties;
}
