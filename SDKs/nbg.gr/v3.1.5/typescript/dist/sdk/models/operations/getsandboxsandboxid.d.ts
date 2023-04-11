import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSandboxSandboxIdSecurity extends SpeakeasyBase {
    authorizationCodeToken: string;
    clientId: string;
}
export declare class GetSandboxSandboxIdRequest extends SpeakeasyBase {
    /**
     * Sandbox Id
     */
    sandboxId: string;
}
export declare class GetSandboxSandboxIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    sandbox?: shared.Sandbox;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
