import { SpeakeasyBase } from "../../../internal/utils";
import { SourcePosition } from "./sourceposition";
/**
 * The severity of the issue.
 */
export declare enum IssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Deprecation = "DEPRECATION",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * Issues include warnings, errors, and deprecation notices.
 */
export declare class Issue extends SpeakeasyBase {
    /**
     * Short error description.
     */
    description?: string;
    /**
     * The severity of the issue.
     */
    severity?: IssueSeverityEnum;
    /**
     * Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.
     */
    sourcePosition?: SourcePosition;
}
