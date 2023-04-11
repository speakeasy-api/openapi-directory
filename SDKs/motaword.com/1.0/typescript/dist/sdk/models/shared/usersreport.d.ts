import { SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { User } from "./user";
export declare class UsersReportReport extends SpeakeasyBase {
    currency?: string;
    spending?: number;
    user?: User;
    wordCount?: number;
}
/**
 * User stats for client and vendors
 */
export declare class UsersReport extends SpeakeasyBase {
    meta?: PagingMeta;
    report?: UsersReportReport[];
}
