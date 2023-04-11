import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmAuthenticationExecutionsExecutionIdConfigRequest extends SpeakeasyBase {
    /**
     * JSON with new configuration
     */
    authenticatorConfigRepresentation: shared.AuthenticatorConfigRepresentation;
    /**
     * Execution id
     */
    executionId: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmAuthenticationExecutionsExecutionIdConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
