import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The wrapper message of any data and its signature.
 */
export declare class SignedData extends SpeakeasyBase {
    /**
     * The data to be signed.
     */
    data?: string;
    /**
     * The signature of the data field.
     */
    signature?: string;
}
