import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveConfigRequest extends SpeakeasyBase {
    config: string;
    key: string;
}
export declare class RetrieveConfigResponse extends SpeakeasyBase {
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
}
