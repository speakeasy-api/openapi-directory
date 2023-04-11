import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Download details for a file stored in Google Cloud Storage.
 */
export declare class UnsampledReportCloudStorageDownloadDetails extends SpeakeasyBase {
    /**
     * Id of the bucket the file object is stored in.
     */
    bucketId?: string;
    /**
     * Id of the file object containing the report data.
     */
    objectId?: string;
}
/**
 * Download details for a file stored in Google Drive.
 */
export declare class UnsampledReportDriveDownloadDetails extends SpeakeasyBase {
    /**
     * Id of the document/file containing the report data.
     */
    documentId?: string;
}
/**
 * JSON template for Analytics unsampled report resource.
 */
export declare class UnsampledReport extends SpeakeasyBase {
    /**
     * Account ID to which this unsampled report belongs.
     */
    accountId?: string;
    /**
     * Download details for a file stored in Google Cloud Storage.
     */
    cloudStorageDownloadDetails?: UnsampledReportCloudStorageDownloadDetails;
    /**
     * Time this unsampled report was created.
     */
    created?: Date;
    /**
     * The dimensions for the unsampled report.
     */
    dimensions?: string;
    /**
     * The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field.
     */
    downloadType?: string;
    /**
     * Download details for a file stored in Google Drive.
     */
    driveDownloadDetails?: UnsampledReportDriveDownloadDetails;
    /**
     * The end date for the unsampled report.
     */
    endDate?: string;
    /**
     * The filters for the unsampled report.
     */
    filters?: string;
    /**
     * Unsampled report ID.
     */
    id?: string;
    /**
     * Resource type for an Analytics unsampled report.
     */
    kind?: string;
    /**
     * The metrics for the unsampled report.
     */
    metrics?: string;
    /**
     * View (Profile) ID to which this unsampled report belongs.
     */
    profileId?: string;
    /**
     * The segment for the unsampled report.
     */
    segment?: string;
    /**
     * Link for this unsampled report.
     */
    selfLink?: string;
    /**
     * The start date for the unsampled report.
     */
    startDate?: string;
    /**
     * Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED.
     */
    status?: string;
    /**
     * Title of the unsampled report.
     */
    title?: string;
    /**
     * Time this unsampled report was last modified.
     */
    updated?: Date;
    /**
     * Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY.
     */
    webPropertyId?: string;
}
/**
 * JSON template for Analytics unsampled report resource.
 */
export declare class UnsampledReportInput extends SpeakeasyBase {
    /**
     * Account ID to which this unsampled report belongs.
     */
    accountId?: string;
    /**
     * The dimensions for the unsampled report.
     */
    dimensions?: string;
    /**
     * The end date for the unsampled report.
     */
    endDate?: string;
    /**
     * The filters for the unsampled report.
     */
    filters?: string;
    /**
     * Unsampled report ID.
     */
    id?: string;
    /**
     * The metrics for the unsampled report.
     */
    metrics?: string;
    /**
     * View (Profile) ID to which this unsampled report belongs.
     */
    profileId?: string;
    /**
     * The segment for the unsampled report.
     */
    segment?: string;
    /**
     * The start date for the unsampled report.
     */
    startDate?: string;
    /**
     * Title of the unsampled report.
     */
    title?: string;
    /**
     * Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY.
     */
    webPropertyId?: string;
}
