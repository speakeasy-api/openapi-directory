import { SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { UserGroup } from "./usergroup";
/**
 * User group list
 */
export declare class UserGroupList extends SpeakeasyBase {
    meta?: PagingMeta;
    userGroups?: UserGroup[];
}
