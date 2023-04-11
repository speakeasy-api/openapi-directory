import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container message for hash values.
 */
export declare class Hash extends SpeakeasyBase {
    /**
     * Required. The type of hash that was performed, e.g. "SHA-256".
     */
    type?: string;
    /**
     * Required. The hash value.
     */
    value?: string;
}
