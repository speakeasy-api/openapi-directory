import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletHookSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class DeletHookRequest extends SpeakeasyBase {
    /**
     * Hook ID
     */
    hookId: string;
}
export declare class DeletHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    deletHook200ApplicationJSONString?: string;
}
