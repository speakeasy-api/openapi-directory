import { SpeakeasyBase } from "../../../internal/utils";
import { OrderDocument } from "./orderdocument";
/**
 * Order document List Response
 */
export declare class OrderDocumentsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocumentsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Order document collection
     */
    orderDocuments?: OrderDocument[];
}
