import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchGlobalAuthModuleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PatchGlobalAuthModuleRequest extends SpeakeasyBase {
    requestBody?: shared.Patch[];
    /**
     * The auth. config id
     */
    id: string;
}
export declare class PatchGlobalAuthModuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    patchGlobalAuthModule200ApplicationJSONOneOf?: any;
}
