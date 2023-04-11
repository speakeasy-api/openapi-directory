import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2NotesJsonRequestBody extends SpeakeasyBase {
    /**
     * ID of the item with which the note is associated
     */
    associatedWithId: number;
    /**
     * Case insensitive type of item with which the note is associated.  Value must be one of: person, account
     */
    associatedWithType: string;
    /**
     * ID of the call with which the note is associated. The call cannot already have a note
     */
    callId?: number;
    /**
     * The content of the note
     */
    content: string;
    /**
     * Boolean indicating if the CRM sync should be skipped.  No syncing will occur if true
     */
    skipCrmSync?: boolean;
    /**
     * The subject of the note's crm activity, defaults to 'Note'
     */
    subject?: string;
    /**
     * The user to create the note for. Only team admins may create notes on behalf of other users. Defaults to the requesting user
     */
    userGuid?: string;
}
export declare class PostV2NotesJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
