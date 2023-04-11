import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaCertificate } from "./googlecloudintegrationsv1alphacertificate";
/**
 * Response to list Certificates.
 */
export declare class GoogleCloudIntegrationsV1alphaListCertificatesResponse extends SpeakeasyBase {
    /**
     * The list of Certificates retrieved.
     */
    certificates?: GoogleCloudIntegrationsV1alphaCertificate[];
    /**
     * The token used to retrieve the next page of results.
     */
    nextPageToken?: string;
}
