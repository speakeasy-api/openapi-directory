import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for fetching the opt out status for the automated GA4 setup process.
 */
export declare class GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest extends SpeakeasyBase {
    /**
     * Required. The UA property to get the opt out status. Note this request uses the internal property ID, not the tracking ID of the form UA-XXXXXX-YY. Format: properties/{internalWebPropertyId} Example: properties/1234
     */
    property?: string;
}
