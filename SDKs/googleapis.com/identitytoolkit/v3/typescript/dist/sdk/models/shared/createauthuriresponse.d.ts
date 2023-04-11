import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of creating the IDP authentication URL.
 */
export declare class CreateAuthUriResponse extends SpeakeasyBase {
    /**
     * all providers the user has once used to do federated login
     */
    allProviders?: string[];
    /**
     * The URI used by the IDP to authenticate the user.
     */
    authUri?: string;
    /**
     * True if captcha is required.
     */
    captchaRequired?: boolean;
    /**
     * True if the authUri is for user's existing provider.
     */
    forExistingProvider?: boolean;
    /**
     * The fixed string identitytoolkit#CreateAuthUriResponse".
     */
    kind?: string;
    /**
     * The provider ID of the auth URI.
     */
    providerId?: string;
    /**
     * Whether the user is registered if the identifier is an email.
     */
    registered?: boolean;
    /**
     * Session ID which should be passed in the following verifyAssertion request.
     */
    sessionId?: string;
    /**
     * All sign-in methods this user has used.
     */
    signinMethods?: string[];
}
