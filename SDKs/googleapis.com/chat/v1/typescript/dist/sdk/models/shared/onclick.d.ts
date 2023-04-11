import { SpeakeasyBase } from "../../../internal/utils";
import { FormAction } from "./formaction";
import { OpenLink } from "./openlink";
/**
 * An onclick action (e.g. open a link).
 */
export declare class OnClick extends SpeakeasyBase {
    /**
     * A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
     */
    action?: FormAction;
    /**
     * A link that opens a new window.
     */
    openLink?: OpenLink;
}
