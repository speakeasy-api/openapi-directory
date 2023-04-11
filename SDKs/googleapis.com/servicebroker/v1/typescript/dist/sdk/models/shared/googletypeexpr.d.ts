import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an expression text. Example:
 *
 * @remarks
 *
 *     title: "User account presence"
 *     description: "Determines whether the request has a user account"
 *     expression: "size(request.user) > 0"
 */
export declare class GoogleTypeExpr extends SpeakeasyBase {
    /**
     * An optional description of the expression. This is a longer text which
     *
     * @remarks
     * describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string;
    /**
     * Textual representation of an expression in
     *
     * @remarks
     * Common Expression Language syntax.
     *
     * The application context of the containing message determines which
     * well-known feature set of CEL is supported.
     */
    expression?: string;
    /**
     * An optional string indicating the location of the expression for error
     *
     * @remarks
     * reporting, e.g. a file name and a position in the file.
     */
    location?: string;
    /**
     * An optional title for the expression, i.e. a short string describing
     *
     * @remarks
     * its purpose. This can be used e.g. in UIs which allow to enter the
     * expression.
     */
    title?: string;
}
