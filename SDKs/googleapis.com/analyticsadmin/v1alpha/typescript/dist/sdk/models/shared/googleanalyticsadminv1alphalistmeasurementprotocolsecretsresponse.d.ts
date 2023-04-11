import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret } from "./googleanalyticsadminv1alphameasurementprotocolsecret";
/**
 * Response message for ListMeasurementProtocolSecret RPC
 */
export declare class GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse extends SpeakeasyBase {
    /**
     * A list of secrets for the parent stream specified in the request.
     */
    measurementProtocolSecrets?: GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
