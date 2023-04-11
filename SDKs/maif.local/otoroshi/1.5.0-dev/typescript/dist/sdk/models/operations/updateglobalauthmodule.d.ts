import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateGlobalAuthModuleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateGlobalAuthModuleRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * The auth. config id
     */
    id: string;
}
export declare class UpdateGlobalAuthModuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateGlobalAuthModule200ApplicationJSONOneOf?: any;
}
