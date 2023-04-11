import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`.
 */
export declare class UrlAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
    /**
     * Required. The URL, for example `example.com`. DV360 supports two levels of subdirectory targeting, for example `www.example.com/one-subdirectory-level/second-level`, and five levels of subdomain targeting, for example `five.four.three.two.one.example.com`.
     */
    url?: string;
}
