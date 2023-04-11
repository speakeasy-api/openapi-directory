import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionInput } from "./permission";
/**
 * The request to add a single permission on the note.
 */
export declare class CreatePermissionRequestInput extends SpeakeasyBase {
    /**
     * Required. The parent note where this permission will be created. Format: `notes/{note}`
     */
    parent?: string;
    /**
     * A single permission on the note. Associates a `member` with a `role`.
     */
    permission?: PermissionInput;
}
