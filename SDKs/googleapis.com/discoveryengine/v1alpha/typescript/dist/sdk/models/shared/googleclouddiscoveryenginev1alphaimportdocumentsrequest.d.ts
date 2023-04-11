import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaBigQuerySource } from "./googleclouddiscoveryenginev1alphabigquerysource";
import { GoogleCloudDiscoveryengineV1alphaGcsSource } from "./googleclouddiscoveryenginev1alphagcssource";
import { GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource } from "./googleclouddiscoveryenginev1alphaimportdocumentsrequestinlinesource";
import { GoogleCloudDiscoveryengineV1alphaImportErrorConfig } from "./googleclouddiscoveryenginev1alphaimporterrorconfig";
/**
 * The mode of reconciliation between existing documents and the documents to be imported. Defaults to ReconciliationMode.INCREMENTAL.
 */
export declare enum GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}
/**
 * Request message for Import methods.
 */
export declare class GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest extends SpeakeasyBase {
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
     * The inline source for the input config for ImportDocuments method.
     */
    inlineSource?: GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource;
    /**
     * The mode of reconciliation between existing documents and the documents to be imported. Defaults to ReconciliationMode.INCREMENTAL.
     */
    reconciliationMode?: GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum;
}
