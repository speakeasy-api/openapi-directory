import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JWT verifier used by multiple service descriptor
 */
export declare class GlobalJwtVerifier extends SpeakeasyBase {
    algoSettings: any;
    /**
     * Verifier description
     */
    desc: string;
    /**
     * Is it enabled
     */
    enabled: boolean;
    /**
     * Verifier id
     */
    id: string;
    /**
     * Verifier name
     */
    name: string;
    source: any;
    strategy: any;
    /**
     * Does it fail if JWT not found
     */
    strict: boolean;
}
