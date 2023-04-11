import { SpeakeasyBase } from "../../../internal/utils";
/**
 * No product information was found for the given `code`.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * The provided code.
     */
    code?: string;
    /**
     * The type of code provided.
     */
    codeType?: any;
    /**
     * A human readable error message.
     */
    error: string;
}
