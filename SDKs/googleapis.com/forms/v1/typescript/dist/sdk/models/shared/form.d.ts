import { SpeakeasyBase } from "../../../internal/utils";
import { FormSettings } from "./formsettings";
import { Info, InfoInput } from "./info";
import { Item, ItemInput } from "./item";
/**
 * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
 */
export declare class Form extends SpeakeasyBase {
    /**
     * Output only. The form ID.
     */
    formId?: string;
    /**
     * The general information for a form.
     */
    info?: Info;
    /**
     * Required. A list of the form's items, which can include section headers, questions, embedded media, etc.
     */
    items?: Item[];
    /**
     * Output only. The ID of the linked Google Sheet which is accumulating responses from this Form (if such a Sheet exists).
     */
    linkedSheetId?: string;
    /**
     * Output only. The form URI to share with responders. This opens a page that allows the user to submit responses but not edit the questions.
     */
    responderUri?: string;
    /**
     * Output only. The revision ID of the form. Used in the WriteControl in update requests to identify the revision on which the changes are based. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the form has not changed. Conversely, a changed ID (for the same form and user) usually means the form has been updated; however, a changed ID can also be due to internal factors such as ID format changes.
     */
    revisionId?: string;
    /**
     * A form's settings.
     */
    settings?: FormSettings;
}
/**
 * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
 */
export declare class FormInput extends SpeakeasyBase {
    /**
     * The general information for a form.
     */
    info?: InfoInput;
    /**
     * Required. A list of the form's items, which can include section headers, questions, embedded media, etc.
     */
    items?: ItemInput[];
    /**
     * A form's settings.
     */
    settings?: FormSettings;
}
