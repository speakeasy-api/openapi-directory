import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a location in the source code.
 */
export declare class SourceLocation extends SpeakeasyBase {
    /**
     * Column within a line. The first column in a line as the value `1`. Agents that do not support setting breakpoints on specific columns ignore this field.
     */
    column?: number;
    /**
     * Line inside the file. The first line in the file has the value `1`.
     */
    line?: number;
    /**
     * Path to the source file within the source context of the target binary.
     */
    path?: string;
}
