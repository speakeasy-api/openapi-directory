import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditContactRequest extends SpeakeasyBase {
    contactEditRequest: shared.ContactEditRequest;
    /**
     * The unique identifier of the contact in Noyo
     */
    contactId: string;
    /**
     * The unique identifier of the group in Noyo
     */
    groupId: string;
    /**
     * The current version identifier of the contact
     */
    version: string;
}
export declare class EditContactResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns the edited Contact
     */
    contactResult?: shared.ContactResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
