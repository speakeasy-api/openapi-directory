import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateConfigRequest extends SpeakeasyBase {
    configUpdateParam: shared.ConfigUpdateParam;
    config: string;
    key: string;
    userToken?: string;
}
export declare class UpdateConfigResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    /**
     * Success
     */
    configResponse?: shared.ConfigResponse;
    contentType: string;
    /**
     * Not Found
     */
    notFoundResponse?: shared.NotFoundResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized Request
     */
    unauthorizedResponse?: shared.UnauthorizedResponse;
}
