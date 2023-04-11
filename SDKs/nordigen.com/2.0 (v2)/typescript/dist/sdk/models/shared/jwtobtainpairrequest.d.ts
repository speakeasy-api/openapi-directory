import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Obtain JWT pair.
 */
export declare class JWTObtainPairRequest extends SpeakeasyBase {
    /**
     * Secret id from /user-secrets/
     */
    secretId: string;
    /**
     * Secret key from /user-secrets/
     */
    secretKey: string;
}
