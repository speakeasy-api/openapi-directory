import { SpeakeasyBase } from "../../../internal/utils";
import { Commission } from "./commission";
import { PagingMeta } from "./pagingmeta";
/**
 * Commissions for client.
 */
export declare class CommissionList extends SpeakeasyBase {
    commissions?: Commission[];
    meta?: PagingMeta;
}
