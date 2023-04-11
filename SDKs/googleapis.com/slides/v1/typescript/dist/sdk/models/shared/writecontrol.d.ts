import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides control over how write requests are executed.
 */
export declare class WriteControl extends SpeakeasyBase {
    /**
     * The revision ID of the presentation required for the write request. If specified and the required revision ID doesn't match the presentation's current revision ID, the request is not processed and returns a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied.
     */
    requiredRevisionId?: string;
}
