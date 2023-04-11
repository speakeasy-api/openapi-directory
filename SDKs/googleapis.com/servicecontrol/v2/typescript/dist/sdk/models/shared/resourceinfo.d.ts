import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a resource referenced in the request.
 */
export declare class ResourceInfo extends SpeakeasyBase {
    /**
     * Optional. The identifier of the container of this resource. For Google Cloud APIs, the resource container must be one of the following formats: - `projects/` - `folders/` - `organizations/` For the policy enforcement on the container level (VPCSC and Location Policy check), this field takes precedence on the container extracted from name when presents.
     */
    container?: string;
    /**
     * Optional. The location of the resource. The value must be a valid zone, region or multiregion. For example: "europe-west4" or "northamerica-northeast1-a"
     */
    location?: string;
    /**
     * The name of the resource referenced in the request.
     */
    name?: string;
    /**
     * The resource permission needed for this request. The format must be "{service}/{plural}.{verb}".
     */
    permission?: string;
    /**
     * The resource type in the format of "{service}/{kind}".
     */
    type?: string;
}
