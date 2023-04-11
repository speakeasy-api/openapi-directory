import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.
 */
export declare class Position extends SpeakeasyBase {
    /**
     * The source code column position (of the line) the current instruction was generated from.
     */
    column?: string;
    /**
     * The number of bytes of source code making up this stack trace element.
     */
    length?: string;
    /**
     * The source code line number the current instruction was generated from.
     */
    line?: string;
}
