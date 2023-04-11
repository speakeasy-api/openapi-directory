import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error occurred on server side.
 */
export declare class InternalErrorMessage extends SpeakeasyBase {
    code?: number;
    /**
     * Details
     */
    message?: string;
}
