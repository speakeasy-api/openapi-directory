import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContactsUpdateSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class ContactsUpdateRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * ID of contact
     */
    contactId: string;
}
export declare class ContactsUpdateResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    contactResponse?: shared.ContactResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
