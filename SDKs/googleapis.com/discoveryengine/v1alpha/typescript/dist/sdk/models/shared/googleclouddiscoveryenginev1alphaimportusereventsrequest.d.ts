import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaBigQuerySource } from "./googleclouddiscoveryenginev1alphabigquerysource";
import { GoogleCloudDiscoveryengineV1alphaGcsSource } from "./googleclouddiscoveryenginev1alphagcssource";
import { GoogleCloudDiscoveryengineV1alphaImportErrorConfig } from "./googleclouddiscoveryenginev1alphaimporterrorconfig";
import { GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource } from "./googleclouddiscoveryenginev1alphaimportusereventsrequestinlinesource";
/**
 * Request message for the ImportUserEvents request.
 */
export declare class GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest extends SpeakeasyBase {
    /**
     * BigQuery source import data from.
     */
    bigquerySource?: GoogleCloudDiscoveryengineV1alphaBigQuerySource;
    /**
     * Configuration of destination for Import related errors.
     */
    errorConfig?: GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
    /**
     * Cloud Storage location for input content.
     */
    gcsSource?: GoogleCloudDiscoveryengineV1alphaGcsSource;
    /**
     * The inline source for the input config for ImportUserEvents method.
     */
    inlineSource?: GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource;
}
