import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Return tracks within a specified duration range
 */
export declare class Duration extends SpeakeasyBase {
    /**
     * Return tracks with at least this duration value
     */
    from?: number;
    /**
     * Return tracks with at most this duration value
     */
    to?: number;
}
