import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaMeasurementProtocolSecret } from "./googleanalyticsadminv1betameasurementprotocolsecret";
/**
 * Response message for ListMeasurementProtocolSecret RPC
**/
export declare class GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse extends SpeakeasyBase {
    measurementProtocolSecrets?: GoogleAnalyticsAdminV1betaMeasurementProtocolSecret[];
    nextPageToken?: string;
}
