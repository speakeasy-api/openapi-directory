import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Determines the action to execute.
 */
export declare enum ContactsPOSTActionEnum {
    Del = "del",
    Write = "write"
}
/**
 * Defines whether to return the response as JSON or CSV separated by semicolon.
 */
export declare enum ContactsPOSTJSONEnum {
    Zero = "0",
    One = "1"
}
export declare class ContactsPOSTRequest extends SpeakeasyBase {
    /**
     * Determines the action to execute.
     */
    action: ContactsPOSTActionEnum;
    /**
     * The contacts email address.
     */
    email?: string;
    /**
     * The contacts phone number.
     */
    empfaenger?: string;
    /**
     * The contact ID for editing/deletion.
     */
    id?: string;
    /**
     * Defines whether to return the response as JSON or CSV separated by semicolon.
     */
    json?: ContactsPOSTJSONEnum;
    /**
     * The contacts name.
     */
    nick?: string;
}
export declare class ContactsPOSTResponse extends SpeakeasyBase {
    /**
     * OK
     */
    contactsPOST200ApplicationJSONString?: string;
    /**
     * OK
     */
    contactsPOST200TextPlainString?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
