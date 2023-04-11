import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteHooksIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Hook
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class DeleteHooksIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Hook Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deleteHooksIdJSON200ApplicationJSONString?: string;
}
