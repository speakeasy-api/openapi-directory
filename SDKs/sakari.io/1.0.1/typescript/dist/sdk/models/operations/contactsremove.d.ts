import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ContactsRemoveSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class ContactsRemoveRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * Contact id to delete
     */
    contactId: string;
}
/**
 * successful operation
 */
export declare class ContactsRemove200ApplicationJSON extends SpeakeasyBase {
    success?: boolean;
}
export declare class ContactsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    contactsRemove200ApplicationJSONObject?: ContactsRemove200ApplicationJSON;
}
