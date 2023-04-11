import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaBigQuerySource } from "./googleclouddiscoveryenginev1betabigquerysource";
import { GoogleCloudDiscoveryengineV1betaGcsSource } from "./googleclouddiscoveryenginev1betagcssource";
import { GoogleCloudDiscoveryengineV1betaImportErrorConfig } from "./googleclouddiscoveryenginev1betaimporterrorconfig";
import { GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource } from "./googleclouddiscoveryenginev1betaimportusereventsrequestinlinesource";
/**
 * Request message for the ImportUserEvents request.
 */
export declare class GoogleCloudDiscoveryengineV1betaImportUserEventsRequest extends SpeakeasyBase {
    /**
     * BigQuery source import data from.
     */
    bigquerySource?: GoogleCloudDiscoveryengineV1betaBigQuerySource;
    /**
     * Configuration of destination for Import related errors.
     */
    errorConfig?: GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    /**
     * Cloud Storage location for input content.
     */
    gcsSource?: GoogleCloudDiscoveryengineV1betaGcsSource;
    /**
     * The inline source for the input config for ImportUserEvents method.
     */
    inlineSource?: GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource;
}
