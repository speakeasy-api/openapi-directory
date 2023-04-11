import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The authentication parameters to provide to the specified resource or URL that requires a username and password. Currently, only Basic HTTP authentication (https://tools.ietf.org/html/rfc7617) is supported in Uptime checks.
 */
export declare class BasicAuthentication extends SpeakeasyBase {
    /**
     * The password to use when authenticating with the HTTP server.
     */
    password?: string;
    /**
     * The username to use when authenticating with the HTTP server.
     */
    username?: string;
}
