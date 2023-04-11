import { SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";
/**
 * Enum value definition.
 */
export declare class EnumValue extends SpeakeasyBase {
    /**
     * Enum value name.
     */
    name?: string;
    /**
     * Enum value number.
     */
    number?: number;
    /**
     * Protocol buffer options.
     */
    options?: Option[];
}
