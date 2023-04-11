import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataImport } from "./metadataimport";
/**
 * Response message for DataprocMetastore.ListMetadataImports.
 */
export declare class ListMetadataImportsResponse extends SpeakeasyBase {
    /**
     * The imports in the specified service.
     */
    metadataImports?: MetadataImport[];
    /**
     * A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
