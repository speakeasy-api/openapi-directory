import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A custom pattern is used for defining custom HTTP verb.
 */
export declare class CustomHttpPattern extends SpeakeasyBase {
    /**
     * The name of this custom HTTP verb.
     */
    kind?: string;
    /**
     * The path matched by this custom verb.
     */
    path?: string;
}
