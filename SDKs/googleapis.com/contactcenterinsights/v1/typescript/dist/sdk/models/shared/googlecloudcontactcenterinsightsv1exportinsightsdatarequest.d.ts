import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination } from "./googlecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination";
/**
 * Options for what to do if the destination table already exists.
 */
export declare enum GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum {
    WriteDispositionUnspecified = "WRITE_DISPOSITION_UNSPECIFIED",
    WriteTruncate = "WRITE_TRUNCATE",
    WriteAppend = "WRITE_APPEND"
}
/**
 * The request to export insights.
 */
export declare class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest extends SpeakeasyBase {
    /**
     * A BigQuery Table Reference.
     */
    bigQueryDestination?: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination;
    /**
     * A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties.
     */
    filter?: string;
    /**
     * A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version}
     */
    kmsKey?: string;
    /**
     * Required. The parent resource to export data from.
     */
    parent?: string;
    /**
     * Options for what to do if the destination table already exists.
     */
    writeDisposition?: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDispositionEnum;
}
