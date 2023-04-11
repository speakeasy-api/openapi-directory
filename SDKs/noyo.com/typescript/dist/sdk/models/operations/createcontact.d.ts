import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateContactRequest extends SpeakeasyBase {
    contactCreateRequest: shared.ContactCreateRequest;
    /**
     * The unique identifier of the group in Noyo
     */
    groupId: string;
}
export declare class CreateContactResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns the new Contact
     */
    contactResult?: shared.ContactResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
