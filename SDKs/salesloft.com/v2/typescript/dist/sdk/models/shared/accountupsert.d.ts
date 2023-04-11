import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Success
 */
export declare class AccountUpsert extends SpeakeasyBase {
    account?: Account;
    /**
     * The type of upsert. One of: create, update
     */
    upsertType?: string;
}
