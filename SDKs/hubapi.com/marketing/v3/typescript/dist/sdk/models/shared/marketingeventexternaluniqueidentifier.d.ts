import { SpeakeasyBase } from "../../../internal/utils";
export declare class MarketingEventExternalUniqueIdentifier extends SpeakeasyBase {
    /**
     * The id of the application that created the marketing event in HubSpot.
     */
    appId: number;
    /**
     * The accountId that is associated with this marketing event in the external event application.
     */
    externalAccountId: string;
    /**
     * The id of the marketing event in the external event application.
     */
    externalEventId: string;
}
