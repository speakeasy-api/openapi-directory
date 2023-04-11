import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSandboxSandboxIdSecurity extends SpeakeasyBase {
    authorizationCodeToken: string;
    clientId: string;
}
export declare class DeleteSandboxSandboxIdRequest extends SpeakeasyBase {
    /**
     * Sandbox Id
     */
    sandboxId: string;
}
export declare class DeleteSandboxSandboxIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
