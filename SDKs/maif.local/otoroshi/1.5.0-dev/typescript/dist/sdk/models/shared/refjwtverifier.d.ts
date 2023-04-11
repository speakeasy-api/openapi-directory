import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reference to a global JWT verifier
 */
export declare class RefJwtVerifier extends SpeakeasyBase {
    /**
     * Is it enabled
     */
    enabled: boolean;
    /**
     * The id of the GlobalJWTVerifier
     */
    id: string;
    /**
     * A string with value 'ref'
     */
    type: string;
}
