import { SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { User } from "./user";
export declare class UserList extends SpeakeasyBase {
    meta?: PagingMeta;
    users?: User[];
}
