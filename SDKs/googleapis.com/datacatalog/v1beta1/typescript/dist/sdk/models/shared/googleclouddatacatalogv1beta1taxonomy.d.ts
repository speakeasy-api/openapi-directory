import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps, GoogleCloudDatacatalogV1beta1SystemTimestampsInput } from "./googleclouddatacatalogv1beta1systemtimestamps";
import { GoogleCloudDatacatalogV1beta1TaxonomyService } from "./googleclouddatacatalogv1beta1taxonomyservice";
export declare enum GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}
/**
 * A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
 */
export declare class GoogleCloudDatacatalogV1beta1Taxonomy extends SpeakeasyBase {
    /**
     * Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list.
     */
    activatedPolicyTypes?: GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum[];
    /**
     * Optional. Description of this taxonomy. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description.
     */
    description?: string;
    /**
     * Required. User defined name of this taxonomy. It must: contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization.
     */
    displayName?: string;
    /**
     * Output only. Resource name of this taxonomy, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{id}".
     */
    name?: string;
    /**
     * Output only. Number of policy tags contained in this taxonomy.
     */
    policyTagCount?: number;
    /**
     * The source system of the Taxonomy.
     */
    service?: GoogleCloudDatacatalogV1beta1TaxonomyService;
    /**
     * Timestamps about this resource according to a particular system.
     */
    taxonomyTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;
}
/**
 * A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
 */
export declare class GoogleCloudDatacatalogV1beta1TaxonomyInput extends SpeakeasyBase {
    /**
     * Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list.
     */
    activatedPolicyTypes?: GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum[];
    /**
     * Optional. Description of this taxonomy. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description.
     */
    description?: string;
    /**
     * Required. User defined name of this taxonomy. It must: contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization.
     */
    displayName?: string;
    /**
     * The source system of the Taxonomy.
     */
    service?: GoogleCloudDatacatalogV1beta1TaxonomyService;
    /**
     * Timestamps about this resource according to a particular system.
     */
    taxonomyTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
}
