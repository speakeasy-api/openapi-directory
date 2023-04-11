import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The general information for a form.
 */
export declare class Info extends SpeakeasyBase {
    /**
     * The description of the form.
     */
    description?: string;
    /**
     * Output only. The title of the document which is visible in Drive. If `Info.title` is empty, `document_title` may appear in its place in the Google Forms UI and be visible to responders. `document_title` can be set on create, but cannot be modified by a batchUpdate request. Please use the [Google Drive API](https://developers.google.com/drive/api/v3/reference/files/update) if you need to programmatically update `document_title`.
     */
    documentTitle?: string;
    /**
     * Required. The title of the form which is visible to responders.
     */
    title?: string;
}
/**
 * The general information for a form.
 */
export declare class InfoInput extends SpeakeasyBase {
    /**
     * The description of the form.
     */
    description?: string;
    /**
     * Required. The title of the form which is visible to responders.
     */
    title?: string;
}
