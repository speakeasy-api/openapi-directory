import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaBigQuerySource } from "./googleclouddiscoveryenginev1betabigquerysource";
import { GoogleCloudDiscoveryengineV1betaGcsSource } from "./googleclouddiscoveryenginev1betagcssource";
import { GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource } from "./googleclouddiscoveryenginev1betaimportdocumentsrequestinlinesource";
import { GoogleCloudDiscoveryengineV1betaImportErrorConfig } from "./googleclouddiscoveryenginev1betaimporterrorconfig";
/**
 * The mode of reconciliation between existing documents and the documents to be imported. Defaults to ReconciliationMode.INCREMENTAL.
 */
export declare enum GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}
/**
 * Request message for Import methods.
 */
export declare class GoogleCloudDiscoveryengineV1betaImportDocumentsRequest extends SpeakeasyBase {
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
     * The inline source for the input config for ImportDocuments method.
     */
    inlineSource?: GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource;
    /**
     * The mode of reconciliation between existing documents and the documents to be imported. Defaults to ReconciliationMode.INCREMENTAL.
     */
    reconciliationMode?: GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum;
}
