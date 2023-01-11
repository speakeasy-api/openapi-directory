import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error of the compilation of a Script
**/
export declare class ScriptCompilationError extends SpeakeasyBase {
    column: string;
    file: Record<string, string>;
    line: string;
    message: Record<string, string>;
    rawMessage: Record<string, string>;
}
