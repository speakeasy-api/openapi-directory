import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SystemTimestamps, GoogleCloudDatacatalogV1SystemTimestampsInput } from "./googleclouddatacatalogv1systemtimestamps";
import { GoogleCloudDatacatalogV1TaxonomyService } from "./googleclouddatacatalogv1taxonomyservice";
export declare enum GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}
/**
 * A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: ``` + PII + Account number + Age + SSN + Zipcode + Financials + Revenue ``` A "data origin" taxonomy might contain the following policy tags: ``` + User data + Employee data + Partner data + Public data ```
 */
export declare class GoogleCloudDatacatalogV1Taxonomy extends SpeakeasyBase {
    /**
     * Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list.
     */
    activatedPolicyTypes?: GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum[];
    /**
     * Optional. Description of this taxonomy. If not set, defaults to empty. The description must contain only Unicode characters, tabs, newlines, carriage returns, and page breaks, and be at most 2000 bytes long when encoded in UTF-8.
     */
    description?: string;
    /**
     * Required. User-defined name of this taxonomy. The name can't start or end with spaces, must contain only Unicode letters, numbers, underscores, dashes, and spaces, and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization.
     */
    displayName?: string;
    /**
     * Output only. Resource name of this taxonomy in URL format. Note: Policy tag manager generates unique taxonomy IDs.
     */
    name?: string;
    /**
     * Output only. Number of policy tags in this taxonomy.
     */
    policyTagCount?: number;
    /**
     * The source system of the Taxonomy.
     */
    service?: GoogleCloudDatacatalogV1TaxonomyService;
    /**
     * Timestamps associated with this resource in a particular system.
     */
    taxonomyTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
}
/**
 * A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: ``` + PII + Account number + Age + SSN + Zipcode + Financials + Revenue ``` A "data origin" taxonomy might contain the following policy tags: ``` + User data + Employee data + Partner data + Public data ```
 */
export declare class GoogleCloudDatacatalogV1TaxonomyInput extends SpeakeasyBase {
    /**
     * Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list.
     */
    activatedPolicyTypes?: GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum[];
    /**
     * Optional. Description of this taxonomy. If not set, defaults to empty. The description must contain only Unicode characters, tabs, newlines, carriage returns, and page breaks, and be at most 2000 bytes long when encoded in UTF-8.
     */
    description?: string;
    /**
     * Required. User-defined name of this taxonomy. The name can't start or end with spaces, must contain only Unicode letters, numbers, underscores, dashes, and spaces, and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization.
     */
    displayName?: string;
    /**
     * The source system of the Taxonomy.
     */
    service?: GoogleCloudDatacatalogV1TaxonomyService;
    /**
     * Timestamps associated with this resource in a particular system.
     */
    taxonomyTimestamps?: GoogleCloudDatacatalogV1SystemTimestampsInput;
}
