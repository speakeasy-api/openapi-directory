import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TransferNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class TransferNumberRequest extends SpeakeasyBase {
    transferNumberRequest: shared.TransferNumberRequest;
    /**
     * ID of the primary account.
     */
    apiKey: string;
}
export declare class TransferNumber422ApplicationJSONInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Validation Error
 */
export declare class TransferNumber422ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters: TransferNumber422ApplicationJSONInvalidParameters[];
    title: string;
    type: string;
}
/**
 * Conflict
 */
export declare class TransferNumber409ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Credential is missing or invalid
 */
export declare class TransferNumber401ApplicationJSON extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class TransferNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Number transfer response
     */
    transferNumberResponse?: shared.TransferNumberResponse;
    /**
     * Credential is missing or invalid
     */
    transferNumber401ApplicationJSONObject?: TransferNumber401ApplicationJSON;
    /**
     * Action is forbidden
     */
    transferNumber403ApplicationJSONOneOf?: any;
    /**
     * Action is forbidden
     */
    transferNumber404ApplicationJSONOneOf?: any;
    /**
     * Conflict
     */
    transferNumber409ApplicationJSONObject?: TransferNumber409ApplicationJSON;
    /**
     * Validation Error
     */
    transferNumber422ApplicationJSONObject?: TransferNumber422ApplicationJSON;
}
