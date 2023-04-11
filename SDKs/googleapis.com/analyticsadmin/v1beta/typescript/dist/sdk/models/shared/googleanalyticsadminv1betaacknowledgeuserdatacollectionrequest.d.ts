import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for AcknowledgeUserDataCollection RPC.
 */
export declare class GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest extends SpeakeasyBase {
    /**
     * Required. An acknowledgement that the caller of this method understands the terms of user data collection. This field must contain the exact value: "I acknowledge that I have the necessary privacy disclosures and rights from my end users for the collection and processing of their data, including the association of such data with the visitation information Google Analytics collects from my site and/or app property."
     */
    acknowledgement?: string;
}
