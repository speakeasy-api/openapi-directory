import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateGlobalAuthModuleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateGlobalAuthModuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createGlobalAuthModule200ApplicationJSONOneOf?: any;
}
