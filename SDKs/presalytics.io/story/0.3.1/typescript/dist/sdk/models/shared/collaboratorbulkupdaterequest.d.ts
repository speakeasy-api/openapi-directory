import { SpeakeasyBase } from "../../../internal/utils";
/**
 * allows for bulk updating of user_ids and active status based on a lead id or user_id
 */
export declare class CollaboratorBulkUpdateRequest extends SpeakeasyBase {
    active?: boolean;
    leadId?: number;
    userId?: string;
}
