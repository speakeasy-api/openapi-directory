import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContactsFetchSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class ContactsFetchRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * ID of contact to return
     */
    contactId: string;
}
export declare class ContactsFetchResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    contactResponse?: shared.ContactResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
