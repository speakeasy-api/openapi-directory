import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a resource associated with this operation.
 */
export declare class ResourceInfo extends SpeakeasyBase {
    /**
     * The resource permission required for this request.
     */
    permission?: string;
    /**
     * The identifier of the parent of this resource instance. Must be in one of the following formats: - `projects/` - `folders/` - `organizations/`
     */
    resourceContainer?: string;
    /**
     * The location of the resource. If not empty, the resource will be checked against location policy. The value must be a valid zone, region or multiregion. For example: "europe-west4" or "northamerica-northeast1-a"
     */
    resourceLocation?: string;
    /**
     * Name of the resource. This is used for auditing purposes.
     */
    resourceName?: string;
}
