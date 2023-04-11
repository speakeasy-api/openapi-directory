import { SpeakeasyBase } from "../../../internal/utils";
import { ReportTypeEnum } from "./reporttypeenum";
/**
 * CreditRelayRefreshRequest defines the request schema for `/credit/relay/refresh`
 */
export declare class CreditRelayRefreshRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The `relay_token` granting access to the report you would like to refresh.
     */
    relayToken: string;
    /**
     * The report type. It can be `assets` or `income`.
     */
    reportType: ReportTypeEnum;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The URL registered to receive webhooks when the report of a relay token has been refreshed.
     */
    webhook?: string;
}
