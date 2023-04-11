import { SpeakeasyBase } from "../../../internal/utils";
import { DomainMapping } from "./domainmapping";
/**
 * Response message for DomainMappings.ListDomainMappings.
 */
export declare class ListDomainMappingsResponse extends SpeakeasyBase {
    /**
     * The domain mappings for the application.
     */
    domainMappings?: DomainMapping[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}
