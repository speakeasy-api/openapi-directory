import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JWT verifier used only for the current service descriptor
 */
export declare class LocalJwtVerifier extends SpeakeasyBase {
    algoSettings: any;
    /**
     * Is it enabled
     */
    enabled: boolean;
    source: any;
    strategy: any;
    /**
     * Does it fail if JWT not found
     */
    strict: boolean;
    /**
     * A string with value 'local'
     */
    type: string;
}
