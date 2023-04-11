import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This secret ID was not recognised
 */
export declare class ErrorSecretIDNotFound extends SpeakeasyBase {
    /**
     * More detail regarding this error, including the secret ID supplied
     */
    detail: string;
    /**
     * Internal Trace ID
     */
    instance: string;
    /**
     * Description of the error
     */
    title: string;
    /**
     * URL for further information
     */
    type: string;
}
