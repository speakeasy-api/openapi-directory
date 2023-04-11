import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Google Forms item.
 */
export declare class Form extends SpeakeasyBase {
    /**
     * URL of the form.
     */
    formUrl?: string;
    /**
     * URL of the form responses document. Only set if responses have been recorded and only when the requesting user is an editor of the form. Read-only.
     */
    responseUrl?: string;
    /**
     * URL of a thumbnail image of the Form. Read-only.
     */
    thumbnailUrl?: string;
    /**
     * Title of the Form. Read-only.
     */
    title?: string;
}
