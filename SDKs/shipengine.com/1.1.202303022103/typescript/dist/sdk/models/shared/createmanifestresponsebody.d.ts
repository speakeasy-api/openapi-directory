import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Manifest } from "./manifest";
import { ManifestRequest } from "./manifestrequest";
/**
 * Object containing the href link to download the manifest file
 */
export declare class CreateManifestResponseBodyManifestDownload extends SpeakeasyBase {
    /**
     * The URL of the linked resource, if any
     */
    href?: string;
}
/**
 * An error response body
 */
export declare class CreateManifestResponseBody extends SpeakeasyBase {
    /**
     * A string that uniquely identifies the carrier
     */
    carrierId: string;
    /**
     * The date-time that the manifest was created
     */
    createdAt: Date;
    /**
     * The errors associated with the failed API call
     */
    errors: ErrorT[];
    /**
     * A string that uniquely identifies the form
     */
    formId: string;
    /**
     * An array of the label ids used in this manifest.
     */
    labelIds?: string[];
    manifestDownload: CreateManifestResponseBodyManifestDownload;
    /**
     * A string that uniquely identifies the manifest
     */
    manifestId: string;
    /**
     * Resulting manifest requests with statuses
     */
    manifestRequests?: ManifestRequest[];
    /**
     * Resulting Manifests
     */
    manifests?: Manifest[];
    /**
     * A UUID that uniquely identifies the request id.
     *
     * @remarks
     * This can be given to the support team to help debug non-trivial issues that may occur
     *
     */
    requestId: string;
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
