import { SpeakeasyBase } from "../../../internal/utils";
import { Manifest } from "./manifest";
/**
 * Object containing the href link to download the manifest file
**/
export declare class CreateManifestResponseBodyManifestDownload extends SpeakeasyBase {
    href?: string;
}
/**
 * Deprecated manifest resource
**/
export declare class CreateManifestResponseBody extends SpeakeasyBase {
    carrierId: Record<string, any>;
    createdAt: Date;
    formId: Record<string, any>;
    manifestDownload: CreateManifestResponseBodyManifestDownload;
    manifestId: Record<string, any>;
    manifests?: Manifest[];
    shipDate: Date;
    shipments: number;
    submissionId: string;
    warehouseId: Record<string, any>;
}
