import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateConfigRequest extends SpeakeasyBase {
    configNewParam: shared.ConfigNewParam;
    key: string;
    userToken?: string;
}
export declare class CreateConfigResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    /**
     * Success
     */
    configResponse?: shared.ConfigResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized Request
     */
    unauthorizedResponse?: shared.UnauthorizedResponse;
}
