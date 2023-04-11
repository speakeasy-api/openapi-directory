import { SpeakeasyBase } from "../../../internal/utils";
export declare class FieldViolation extends SpeakeasyBase {
    /**
     * The description of the error.
     */
    description?: string;
    /**
     * Path of field with violation.
     */
    field?: string;
}
