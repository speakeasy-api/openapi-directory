import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ContactsCreateStringSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
/**
 * Determines how existing contacts with matching mobile numbers are treated
 */
export declare enum ContactsCreateStringMergeStrategyEnum {
    Append = "append",
    Core = "core",
    Remove = "remove"
}
export declare class ContactsCreateStringRequest extends SpeakeasyBase {
    requestBody?: string;
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * Determines how existing contacts with matching mobile numbers are treated
     */
    mergeStrategy?: ContactsCreateStringMergeStrategyEnum;
}
export declare class ContactsCreateStringResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    contactsCreateString201ApplicationJSONOneOf?: any;
}
