import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Nexmo product that you access with this application.
 */
export declare class KeysWithPrivateKey extends SpeakeasyBase {
    /**
     * The private key you use to generate the JSON Web Token (JWT) that authenticates your requests to Messages API.
     */
    privateKey?: string;
    /**
     * The public key used to validate the [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token).
     */
    publicKey?: string;
}
