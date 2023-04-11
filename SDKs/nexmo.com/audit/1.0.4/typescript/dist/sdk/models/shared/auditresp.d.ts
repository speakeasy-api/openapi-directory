import { SpeakeasyBase } from "../../../internal/utils";
import { AuditEvent } from "./auditevent";
import { PaginationData } from "./paginationdata";
import { PaginationLinks } from "./paginationlinks";
/**
 * Container containing the `events` array.
 */
export declare class AuditRespEmbedded extends SpeakeasyBase {
    events?: AuditEvent[];
}
/**
 * OK
 */
export declare class AuditResp extends SpeakeasyBase {
    /**
     * Container containing the `events` array.
     */
    embedded?: AuditRespEmbedded;
    /**
     * Container containing self, next and last page links.
     */
    links?: PaginationLinks;
    /**
     * Page containing results.
     */
    page?: PaginationData;
}
