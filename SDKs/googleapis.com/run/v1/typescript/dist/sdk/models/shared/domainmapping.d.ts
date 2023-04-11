import { SpeakeasyBase } from "../../../internal/utils";
import { DomainMappingSpec } from "./domainmappingspec";
import { DomainMappingStatus } from "./domainmappingstatus";
import { ObjectMeta } from "./objectmeta";
/**
 * Resource to hold the state and status of a user's domain mapping. NOTE: This resource is currently in Beta.
 */
export declare class DomainMapping extends SpeakeasyBase {
    /**
     * The API version for this call such as "domains.cloudrun.com/v1".
     */
    apiVersion?: string;
    /**
     * The kind of resource, in this case "DomainMapping".
     */
    kind?: string;
    /**
     * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta;
    /**
     * The desired state of the Domain Mapping.
     */
    spec?: DomainMappingSpec;
    /**
     * The current state of the Domain Mapping.
     */
    status?: DomainMappingStatus;
}
