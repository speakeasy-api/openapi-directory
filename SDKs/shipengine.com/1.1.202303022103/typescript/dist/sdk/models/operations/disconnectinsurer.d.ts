import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisconnectInsurerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was a success
     */
    disconnectInsurerResponseBody?: Record<string, any>;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
