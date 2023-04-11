import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an error message.
 *
 * @see {@link https://docs.joinmastodon.org/entities/error/}
 */
export declare class ErrorT extends SpeakeasyBase {
    error: string;
    errorDescription?: string;
}
