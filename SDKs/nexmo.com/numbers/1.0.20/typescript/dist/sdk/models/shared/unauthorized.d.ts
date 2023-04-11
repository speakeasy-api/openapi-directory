import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unauthorized
 */
export declare class Unauthorized extends SpeakeasyBase {
    /**
     * The status code of the response. `200` indicates a successful request.
     */
    errorCode?: string;
    /**
     * The status code description
     */
    errorCodeLabel?: string;
}
