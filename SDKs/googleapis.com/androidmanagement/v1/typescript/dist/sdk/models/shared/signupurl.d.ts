import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An enterprise signup URL.
 */
export declare class SignupUrl extends SpeakeasyBase {
    /**
     * The name of the resource. Use this value in the signupUrl field when calling enterprises.create to complete the enterprise signup flow.
     */
    name?: string;
    /**
     * A URL where an enterprise admin can register their enterprise. The page can't be rendered in an iframe.
     */
    url?: string;
}
