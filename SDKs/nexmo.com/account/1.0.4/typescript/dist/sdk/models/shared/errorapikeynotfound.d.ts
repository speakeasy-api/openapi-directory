import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This API key was not recognised
 */
export declare class ErrorAPIKeyNotFound extends SpeakeasyBase {
    /**
     * More detail regarding this error, including the API key supplied
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
