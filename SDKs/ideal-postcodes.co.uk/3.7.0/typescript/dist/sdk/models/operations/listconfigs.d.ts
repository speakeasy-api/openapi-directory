import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListConfigsRequest extends SpeakeasyBase {
    key: string;
    userToken?: string;
}
export declare class ListConfigsResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    /**
     * Success
     */
    configsResponse?: shared.ConfigsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized Request
     */
    unauthorizedResponse?: shared.UnauthorizedResponse;
}
