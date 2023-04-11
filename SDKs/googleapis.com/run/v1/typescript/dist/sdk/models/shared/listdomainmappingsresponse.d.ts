import { SpeakeasyBase } from "../../../internal/utils";
import { DomainMapping } from "./domainmapping";
import { ListMeta } from "./listmeta";
/**
 * ListDomainMappingsResponse is a list of DomainMapping resources.
 */
export declare class ListDomainMappingsResponse extends SpeakeasyBase {
    /**
     * The API version for this call such as "domains.cloudrun.com/v1".
     */
    apiVersion?: string;
    /**
     * List of DomainMappings.
     */
    items?: DomainMapping[];
    /**
     * The kind of this resource, in this case "DomainMappingList".
     */
    kind?: string;
    /**
     * Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.
     */
    metadata?: ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
