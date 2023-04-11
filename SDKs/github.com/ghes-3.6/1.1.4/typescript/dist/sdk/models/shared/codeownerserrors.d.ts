import { SpeakeasyBase } from "../../../internal/utils";
export declare class CodeownersErrorsErrors extends SpeakeasyBase {
    /**
     * The column number where this errors occurs.
     */
    column: number;
    /**
     * The type of error.
     */
    kind: string;
    /**
     * The line number where this errors occurs.
     */
    line: number;
    /**
     * A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting).
     */
    message: string;
    /**
     * The path of the file where the error occured.
     */
    path: string;
    /**
     * The contents of the line where the error occurs.
     */
    source?: string;
    /**
     * Suggested action to fix the error. This will usually be `null`, but is provided for some common errors.
     */
    suggestion?: string;
}
/**
 * A list of errors found in a repo's CODEOWNERS file
 */
export declare class CodeownersErrors extends SpeakeasyBase {
    errors: CodeownersErrorsErrors[];
}
