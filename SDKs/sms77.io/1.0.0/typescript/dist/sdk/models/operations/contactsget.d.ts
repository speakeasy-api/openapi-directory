import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Determines the action to execute.
 */
export declare enum ContactsGetActionEnum {
    Read = "read"
}
/**
 * Defines whether to return the response as JSON or CSV separated by semicolon.
 */
export declare enum ContactsGetJSONEnum {
    Zero = "0",
    One = "1"
}
export declare class ContactsGetRequest extends SpeakeasyBase {
    /**
     * Determines the action to execute.
     */
    action: ContactsGetActionEnum;
    /**
     * Defines whether to return the response as JSON or CSV separated by semicolon.
     */
    json?: ContactsGetJSONEnum;
}
export declare class ContactsGetResponse extends SpeakeasyBase {
    /**
     * OK (CSV)
     */
    contactsGet200ApplicationJSONString?: string;
    /**
     * OK (CSV)
     */
    contactsGet200TextCsvString?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
