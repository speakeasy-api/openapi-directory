import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the [help center](https://support.google.com/a/answer/2537800#asp).
 */
export declare class Asp extends SpeakeasyBase {
    /**
     * The unique ID of the ASP.
     */
    codeId?: number;
    /**
     * The time when the ASP was created. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format.
     */
    creationTime?: string;
    /**
     * ETag of the ASP.
     */
    etag?: string;
    /**
     * The type of the API resource. This is always `admin#directory#asp`.
     */
    kind?: string;
    /**
     * The time when the ASP was last used. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format.
     */
    lastTimeUsed?: string;
    /**
     * The name of the application that the user, represented by their `userId`, entered when the ASP was created.
     */
    name?: string;
    /**
     * The unique ID of the user who issued the ASP.
     */
    userKey?: string;
}
