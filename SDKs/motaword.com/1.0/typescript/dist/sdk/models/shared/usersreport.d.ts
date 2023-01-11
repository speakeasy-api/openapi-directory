import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { PagingMeta } from "./pagingmeta";
export declare class UsersReportReport extends SpeakeasyBase {
    spending?: number;
    user?: User;
    wordCount?: number;
}
export declare class UsersReport extends SpeakeasyBase {
    meta?: PagingMeta;
    report?: UsersReportReport[];
}
