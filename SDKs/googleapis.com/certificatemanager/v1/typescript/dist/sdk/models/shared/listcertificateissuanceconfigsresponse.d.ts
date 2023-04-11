import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateIssuanceConfig } from "./certificateissuanceconfig";
/**
 * Response for the `ListCertificateIssuanceConfigs` method.
 */
export declare class ListCertificateIssuanceConfigsResponse extends SpeakeasyBase {
    /**
     * A list of certificate configs for the parent resource.
     */
    certificateIssuanceConfigs?: CertificateIssuanceConfig[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
