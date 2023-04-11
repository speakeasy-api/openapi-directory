import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response to a modify contact group members request.
 */
export declare class ModifyContactGroupMembersResponse extends SpeakeasyBase {
    /**
     * The contact people resource names that cannot be removed from their last contact group.
     */
    canNotRemoveLastContactGroupResourceNames?: string[];
    /**
     * The contact people resource names that were not found.
     */
    notFoundResourceNames?: string[];
}
