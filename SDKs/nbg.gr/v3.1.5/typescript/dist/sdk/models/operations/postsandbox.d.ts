import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSandboxSecurity extends SpeakeasyBase {
    authorizationCodeToken: string;
    clientId: string;
}
export declare class PostSandboxResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    sandbox?: shared.Sandbox;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
