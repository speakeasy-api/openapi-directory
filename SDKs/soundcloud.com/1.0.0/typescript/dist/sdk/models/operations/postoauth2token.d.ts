import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOauth2TokenSecurity extends SpeakeasyBase {
    clientId: shared.SchemeClientId;
}
export declare class PostOauth2TokenRequest extends SpeakeasyBase {
    request?: any;
    security: PostOauth2TokenSecurity;
}
export declare class PostOauth2TokenResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    postOauth2Token400ApplicationJSONOneOf?: any;
}
