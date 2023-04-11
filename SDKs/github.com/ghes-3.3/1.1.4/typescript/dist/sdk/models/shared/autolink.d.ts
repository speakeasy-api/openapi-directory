import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An autolink reference.
 */
export declare class Autolink extends SpeakeasyBase {
    id: number;
    /**
     * The prefix of a key that is linkified.
     */
    keyPrefix: string;
    /**
     * A template for the target URL that is generated if a key was found.
     */
    urlTemplate: string;
}
