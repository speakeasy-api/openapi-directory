import { Accounts } from "./accounts";
import { Categories } from "./categories";
import * as shared from "./models/shared";
import { Tags } from "./tags";
import { Transactions } from "./transactions";
import { UtilityEndpoints } from "./utilityendpoints";
import { Webhooks } from "./webhooks";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.up.com.au/api/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Up API gives you programmatic access to your balances and
 *
 * @remarks
 * transaction data. You can request past transactions or set up
 * webhooks to receive real-time events when new transactions hit your
 * account. It’s new, it’s exciting and it’s just the beginning.
 *
 */
export declare class SDK {
    /**
     * Accounts represent the underlying store used to track balances
     *
     * @remarks
     * and the transactions that have occurred to modify those balances
     * over time. Up currently has two types of account: `SAVER`—used to
     * earn interest and to hit savings goals, and `TRANSACTIONAL`—used
     * for everyday spending.
     *
     */
    accounts: Accounts;
    /**
     * Categories enable understanding where your money goes by driving
     *
     * @remarks
     * powerful insights in Up. All categories in Up are pre-defined
     * and are automatically assigned to new purchases in most cases. A
     * parent-child relationship is used to represent categories,
     * however parent categories cannot be directly assigned to
     * transactions.
     *
     */
    categories: Categories;
    /**
     * Tags are custom labels that can be associated with transactions
     *
     * @remarks
     * on Up. Within the Up application, tags provide additional insight
     * into spending. For example, you could have a "Take Away" tag that
     * you apply to purchases from food delivery services. The Up API
     * allows you to manage the tags associated with transactions. Each
     * transaction may have up to 6 tags.
     *
     * Tags are identified by their labels, which are unique strings,
     * so the tag "Holiday" has also the `id` `"Holiday"`.
     *
     */
    tags: Tags;
    /**
     * Transactions represent the movement of money into and out of an
     *
     * @remarks
     * account. They have many characteristics that vary depending on
     * the kind of transaction. Transactions may be temporarily `HELD`
     * (pending) or `SETTLED`, typically depending on which payment
     * method was used at the point of sale.
     *
     */
    transactions: Transactions;
    /**
     * Some endpoints exist not to expose data, but to test the API
     *
     * @remarks
     * itself. Currently there is only one endpoint in this group: ping!
     *
     */
    utilityEndpoints: UtilityEndpoints;
    /**
     * Webhooks provide a mechanism for a configured URL to receive
     *
     * @remarks
     * events when transaction activity occurs on Up. You can think of
     * webhooks as being like push notifications for your server-side
     * application.
     *
     */
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
