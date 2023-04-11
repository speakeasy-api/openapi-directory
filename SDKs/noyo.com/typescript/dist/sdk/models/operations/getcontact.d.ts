import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContactRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the contact in Noyo
     */
    contactId: string;
    /**
     * The unique identifier of the group in Noyo
     */
    groupId: string;
}
export declare class GetContactResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns a single Contact
     */
    contactResult?: shared.ContactResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
