import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Template for application transfer parameters.
 */
export declare class ApplicationTransferParam extends SpeakeasyBase {
    /**
     * The type of the transfer parameter, such as `PRIVACY_LEVEL`.
     */
    key?: string;
    /**
     * The value of the transfer parameter, such as `PRIVATE` or `SHARED`.
     */
    value?: string[];
}
