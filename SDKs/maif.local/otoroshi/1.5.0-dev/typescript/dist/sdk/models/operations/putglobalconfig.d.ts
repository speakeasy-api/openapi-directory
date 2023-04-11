import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutGlobalConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PutGlobalConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    globalConfig?: shared.GlobalConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
