import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message containing Stack Pack information.
 */
export declare class StackPack extends SpeakeasyBase {
    /**
     * The stack pack advice strings.
     */
    descriptions?: Record<string, string>;
    /**
     * The stack pack icon data uri.
     */
    iconDataURL?: string;
    /**
     * The stack pack id.
     */
    id?: string;
    /**
     * The stack pack title.
     */
    title?: string;
}
