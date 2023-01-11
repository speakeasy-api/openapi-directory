import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthGetRequest extends SpeakeasyBase {
    request: shared.AuthGetRequest;
}
export declare class AuthGetResponse extends SpeakeasyBase {
    authGetResponse?: Record<string, any>;
    contentType: string;
    error?: Record<string, any>;
    statusCode: number;
}
