import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token.
 */
export declare class SignupInfo extends SpeakeasyBase {
    /**
     * An opaque token that will be required, along with the Enterprise Token, for obtaining the enterprise resource from CompleteSignup.
     */
    completionToken?: string;
    /**
     * Deprecated.
     */
    kind?: string;
    /**
     * A URL under which the Admin can sign up for an enterprise. The page pointed to cannot be rendered in an iframe.
     */
    url?: string;
}
