import { AxiosInstance } from "axios";
import { AccountAccess } from "./accountaccess";
import { Accounts } from "./accounts";
import { Balances } from "./balances";
import { Beneficiaries } from "./beneficiaries";
import { Parties } from "./parties";
import { Sandbox } from "./sandbox";
import { ScheduledPayments } from "./scheduledpayments";
import { StandingOrders } from "./standingorders";
import { Statements } from "./statements";
import { Transactions } from "./transactions";
export declare const ServerList: readonly ["https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5", "https://services.nbg.gr/apis/open-banking/v3.1.5/aisp"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accountAccess: AccountAccess;
    accounts: Accounts;
    balances: Balances;
    beneficiaries: Beneficiaries;
    parties: Parties;
    sandbox: Sandbox;
    scheduledPayments: ScheduledPayments;
    standingOrders: StandingOrders;
    statements: Statements;
    transactions: Transactions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
