import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateTemplate } from "./certificatetemplate";
/**
 * Response message for CertificateAuthorityService.ListCertificateTemplates.
 */
export declare class ListCertificateTemplatesResponse extends SpeakeasyBase {
    /**
     * The list of CertificateTemplates.
     */
    certificateTemplates?: CertificateTemplate[];
    /**
     * A token to retrieve next page of results. Pass this value in ListCertificateTemplatesRequest.next_page_token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * A list of locations (e.g. "us-west1") that could not be reached.
     */
    unreachable?: string[];
}
