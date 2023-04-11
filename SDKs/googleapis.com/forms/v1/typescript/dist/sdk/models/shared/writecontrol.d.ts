import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides control over how write requests are executed.
 */
export declare class WriteControl extends SpeakeasyBase {
    /**
     * The revision ID of the form that the write request is applied to. If this is not the latest revision of the form, the request is not processed and returns a 400 bad request error.
     */
    requiredRevisionId?: string;
    /**
     * The target revision ID of the form that the write request is applied to. If changes have occurred after this revision, the changes in this update request are transformed against those changes. This results in a new revision of the form that incorporates both the changes in the request and the intervening changes, with the server resolving conflicting changes. The target revision ID may only be used to write to recent versions of a form. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 (Bad Request Error). The request may be retried after reading the latest version of the form. In most cases a target revision ID remains valid for several minutes after it is read, but for frequently-edited forms this window may be shorter.
     */
    targetRevisionId?: string;
}
