import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmAuthenticationExecutionsRequest extends SpeakeasyBase {
    /**
     * JSON model describing authentication execution
     */
    authenticationExecutionRepresentation: shared.AuthenticationExecutionRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmAuthenticationExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
