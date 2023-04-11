import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The status of the client customer. Read only.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCustomerClientStatusEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Enabled = "ENABLED",
    Canceled = "CANCELED",
    Suspended = "SUSPENDED",
    Closed = "CLOSED"
}
/**
 * A link between the given customer and a client customer. CustomerClients only exist for manager customers. All direct and indirect client customers are included, as well as the manager itself.
 */
export declare class GoogleAdsSearchads360V0ResourcesCustomerClient extends SpeakeasyBase {
    /**
     * Output only. The resource names of the labels owned by the requesting customer that are applied to the client customer. Label resource names have the form: `customers/{customer_id}/labels/{label_id}`
     */
    appliedLabels?: string[];
    /**
     * Output only. The resource name of the client-customer which is linked to the given customer. Read only.
     */
    clientCustomer?: string;
    /**
     * Output only. Currency code (for example, 'USD', 'EUR') for the client. Read only.
     */
    currencyCode?: string;
    /**
     * Output only. Descriptive name for the client. Read only.
     */
    descriptiveName?: string;
    /**
     * Output only. Specifies whether this is a hidden account. Read only.
     */
    hidden?: boolean;
    /**
     * Output only. The ID of the client customer. Read only.
     */
    id?: string;
    /**
     * Output only. Distance between given customer and client. For self link, the level value will be 0. Read only.
     */
    level?: string;
    /**
     * Output only. Identifies if the client is a manager. Read only.
     */
    manager?: boolean;
    /**
     * Output only. The resource name of the customer client. CustomerClient resource names have the form: `customers/{customer_id}/customerClients/{client_customer_id}`
     */
    resourceName?: string;
    /**
     * Output only. The status of the client customer. Read only.
     */
    status?: GoogleAdsSearchads360V0ResourcesCustomerClientStatusEnum;
    /**
     * Output only. Identifies if the client is a test account. Read only.
     */
    testAccount?: boolean;
    /**
     * Output only. Common Locale Data Repository (CLDR) string representation of the time zone of the client, for example, America/Los_Angeles. Read only.
     */
    timeZone?: string;
}
