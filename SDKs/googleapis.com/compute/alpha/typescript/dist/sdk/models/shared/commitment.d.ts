import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseResourceCommitment } from "./licenseresourcecommitment";
import { Reservation } from "./reservation";
import { ResourceCommitment } from "./resourcecommitment";
/**
 * The category of the commitment. Category MACHINE specifies commitments composed of machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE specifies commitments composed of software licenses, listed in licenseResources. Note that only MACHINE commitments should have a Type specified.
 */
export declare enum CommitmentCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    License = "LICENSE",
    Machine = "MACHINE"
}
/**
 * The plan for this commitment, which determines duration and discount rate. The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years).
 */
export declare enum CommitmentPlanEnum {
    Invalid = "INVALID",
    ThirtySixMonth = "THIRTY_SIX_MONTH",
    TwelveMonth = "TWELVE_MONTH"
}
/**
 * [Output Only] Status of the commitment with regards to eventual expiration (each commitment has an end date defined). One of the following values: NOT_YET_ACTIVE, ACTIVE, EXPIRED.
 */
export declare enum CommitmentStatusEnum {
    Active = "ACTIVE",
    Cancelled = "CANCELLED",
    Creating = "CREATING",
    Expired = "EXPIRED",
    NotYetActive = "NOT_YET_ACTIVE"
}
/**
 * The type of commitment, which affects the discount rate and the eligible resources. Type MEMORY_OPTIMIZED specifies a commitment that will only apply to memory optimized machines. Type ACCELERATOR_OPTIMIZED specifies a commitment that will only apply to accelerator optimized machines.
 */
export declare enum CommitmentTypeEnum {
    AcceleratorOptimized = "ACCELERATOR_OPTIMIZED",
    ComputeOptimized = "COMPUTE_OPTIMIZED",
    ComputeOptimizedC2D = "COMPUTE_OPTIMIZED_C2D",
    ComputeOptimizedC3 = "COMPUTE_OPTIMIZED_C3",
    GeneralPurpose = "GENERAL_PURPOSE",
    GeneralPurposeE2 = "GENERAL_PURPOSE_E2",
    GeneralPurposeN2 = "GENERAL_PURPOSE_N2",
    GeneralPurposeN2D = "GENERAL_PURPOSE_N2D",
    GeneralPurposeT2D = "GENERAL_PURPOSE_T2D",
    GraphicsOptimized = "GRAPHICS_OPTIMIZED",
    MemoryOptimized = "MEMORY_OPTIMIZED",
    MemoryOptimizedM3 = "MEMORY_OPTIMIZED_M3",
    TypeUnspecified = "TYPE_UNSPECIFIED"
}
/**
 * Represents a regional Commitment resource. Creating a commitment resource means that you are purchasing a committed use contract with an explicit start and end time. You can create commitments based on vCPUs and memory usage and receive discounted rates. For full details, read Signing Up for Committed Use Discounts.
 */
export declare class Commitment extends SpeakeasyBase {
    /**
     * Specifies whether to enable automatic renewal for the commitment. The default value is false if not specified. The field can be updated until the day of the commitment expiration at 12:00am PST. If the field is set to true, the commitment will be automatically renewed for either one or three years according to the terms of the existing commitment.
     */
    autoRenew?: boolean;
    /**
     * The category of the commitment. Category MACHINE specifies commitments composed of machine resources such as VCPU or MEMORY, listed in resources. Category LICENSE specifies commitments composed of software licenses, listed in licenseResources. Note that only MACHINE commitments should have a Type specified.
     */
    category?: CommitmentCategoryEnum;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] Commitment end time in RFC3339 text format.
     */
    endTimestamp?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#commitment for commitments.
     */
    kind?: string;
    /**
     * Commitment for a particular license resource.
     */
    licenseResource?: LicenseResourceCommitment;
    /**
     * List of source commitments to be merged into a new commitment.
     */
    mergeSourceCommitments?: string[];
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * The plan for this commitment, which determines duration and discount rate. The currently supported plans are TWELVE_MONTH (1 year), and THIRTY_SIX_MONTH (3 years).
     */
    plan?: CommitmentPlanEnum;
    /**
     * [Output Only] URL of the region where this commitment may be used.
     */
    region?: string;
    /**
     * List of reservations in this commitment.
     */
    reservations?: Reservation[];
    /**
     * A list of commitment amounts for particular resources. Note that VCPU and MEMORY resource commitments must occur together.
     */
    resources?: ResourceCommitment[];
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * Source commitment to be splitted into a new commitment.
     */
    splitSourceCommitment?: string;
    /**
     * [Output Only] Commitment start time in RFC3339 text format.
     */
    startTimestamp?: string;
    /**
     * [Output Only] Status of the commitment with regards to eventual expiration (each commitment has an end date defined). One of the following values: NOT_YET_ACTIVE, ACTIVE, EXPIRED.
     */
    status?: CommitmentStatusEnum;
    /**
     * [Output Only] An optional, human-readable explanation of the status.
     */
    statusMessage?: string;
    /**
     * The type of commitment, which affects the discount rate and the eligible resources. Type MEMORY_OPTIMIZED specifies a commitment that will only apply to memory optimized machines. Type ACCELERATOR_OPTIMIZED specifies a commitment that will only apply to accelerator optimized machines.
     */
    type?: CommitmentTypeEnum;
}
