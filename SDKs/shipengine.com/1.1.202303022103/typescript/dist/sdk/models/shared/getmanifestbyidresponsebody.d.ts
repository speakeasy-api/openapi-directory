import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object containing the href link to download the manifest file
 */
export declare class GetManifestByIdResponseBodyManifestDownload extends SpeakeasyBase {
    /**
     * The URL of the linked resource, if any
     */
    href?: string;
}
/**
 * Used for combining packages into one scannable form that a carrier can use when picking up a large
 *
 * @remarks
 * number of shipments
 *
 */
export declare class GetManifestByIdResponseBody extends SpeakeasyBase {
    /**
     * A string that uniquely identifies the carrier
     */
    carrierId: string;
    /**
     * The date-time that the manifest was created
     */
    createdAt: Date;
    /**
     * A string that uniquely identifies the form
     */
    formId: string;
    /**
     * An array of the label ids used in this manifest.
     */
    labelIds: string[];
    manifestDownload: GetManifestByIdResponseBodyManifestDownload;
    /**
     * A string that uniquely identifies the manifest
     */
    manifestId: string;
    /**
     * The date-time that the manifests shipments will be picked up
     */
    shipDate: Date;
    /**
     * The number of shipments that are included in this manifest
     */
    shipments: number;
    /**
     * A string that uniquely identifies the submission
     */
    submissionId: string;
    /**
     * A string that uniquely identifies the warehouse
     */
    warehouseId: string;
}
