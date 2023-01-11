import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object containing the href link to download the manifest file
**/
export declare class ManifestManifestDownload extends SpeakeasyBase {
    href?: string;
}
/**
 * Used for combining packages into one scannable form that a carrier can use when picking up a large
 * number of shipments
 *
**/
export declare class Manifest extends SpeakeasyBase {
    carrierId?: Record<string, any>;
    createdAt?: Date;
    formId?: Record<string, any>;
    manifestDownload?: ManifestManifestDownload;
    manifestId?: Record<string, any>;
    shipDate?: Date;
    shipments?: number;
    submissionId?: string;
    warehouseId?: Record<string, any>;
}
