import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Representation of a label field.
 */
export declare class LabelField extends SpeakeasyBase {
    /**
     * Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD.
     */
    dateString?: Date[];
    /**
     * The identifier of this field.
     */
    id?: string;
    /**
     * Only present if valueType is integer.
     */
    integer?: string[];
    /**
     * This is always drive#labelField.
     */
    kind?: string;
    /**
     * Only present if valueType is selection.
     */
    selection?: string[];
    /**
     * Only present if valueType is text.
     */
    text?: string[];
    /**
     * Only present if valueType is user.
     */
    user?: User[];
    /**
     * The field type. While new values may be supported in the future, the following are currently allowed:
     *
     * @remarks
     * - dateString
     * - integer
     * - selection
     * - text
     * - user
     */
    valueType?: string;
}
