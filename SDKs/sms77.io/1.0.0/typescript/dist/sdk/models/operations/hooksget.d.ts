import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Determines the action to execute.
 */
export declare enum HooksGetActionEnum {
    Read = "read"
}
export declare class HooksGetRequest extends SpeakeasyBase {
    /**
     * Determines the action to execute.
     */
    action: HooksGetActionEnum;
}
export declare class HooksGet200ApplicationJSONHooks extends SpeakeasyBase {
    created?: string;
    eventType?: string;
    id?: string;
    requestMethod?: string;
    targetUrl?: string;
}
/**
 * OK
 */
export declare class HooksGet200ApplicationJSON extends SpeakeasyBase {
    hooks?: HooksGet200ApplicationJSONHooks[];
    success?: boolean;
}
export declare class HooksGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    hooksGet200ApplicationJSONObject?: HooksGet200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
