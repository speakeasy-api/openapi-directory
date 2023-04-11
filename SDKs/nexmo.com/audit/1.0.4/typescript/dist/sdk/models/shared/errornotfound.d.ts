import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Not Found
 */
export declare class ErrorNotFound extends SpeakeasyBase {
    /**
     * A human readable description of the error XXX
     */
    error?: string;
    /**
     * A longer description of the error YYY
     */
    message?: string;
    /**
     * The HTTP Status code of the error
     */
    status?: number;
}
