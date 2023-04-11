import { SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { User } from "./user";
/**
 * User list
 */
export declare class UserList extends SpeakeasyBase {
    meta?: PagingMeta;
    users?: User[];
}
