import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Token type
 */
export declare enum GetUserUsernameTokenKindKindEnum {
    Access = "'access'",
    Refresh = "'refresh'",
    Authorization = "'authorization'",
    Id = "'id'",
    Selfie = "'selfie'",
    Plain = "'plain'"
}
export declare class GetUserUsernameTokenKindRequest extends SpeakeasyBase {
    /**
     * Token type
     */
    kind: GetUserUsernameTokenKindKindEnum;
    /**
     * OpenID Connect scope
     */
    scope?: string;
    /**
     * A username or email.
     */
    username: string;
}
export declare class GetUserUsernameTokenKindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
