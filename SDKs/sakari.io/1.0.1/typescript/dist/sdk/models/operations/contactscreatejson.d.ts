import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContactsCreateJsonSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
/**
 * Determines how existing contacts with matching mobile numbers are treated
 */
export declare enum ContactsCreateJsonMergeStrategyEnum {
    Append = "append",
    Core = "core",
    Remove = "remove"
}
export declare class ContactsCreateJsonRequest extends SpeakeasyBase {
    contactRequest?: shared.ContactRequest;
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * Determines how existing contacts with matching mobile numbers are treated
     */
    mergeStrategy?: ContactsCreateJsonMergeStrategyEnum;
}
export declare class ContactsCreateJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    contactsCreateJSON201ApplicationJSONOneOf?: any;
}
