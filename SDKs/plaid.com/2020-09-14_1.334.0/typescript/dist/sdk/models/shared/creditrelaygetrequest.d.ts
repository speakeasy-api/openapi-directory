import { SpeakeasyBase } from "../../../internal/utils";
import { ReportTypeEnum } from "./reporttypeenum";
/**
 * CreditRelayGetRequest defines the request schema for `/credit/relay/get`
 */
export declare class CreditRelayGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The `relay_token` granting access to the report you would like to get.
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
}
