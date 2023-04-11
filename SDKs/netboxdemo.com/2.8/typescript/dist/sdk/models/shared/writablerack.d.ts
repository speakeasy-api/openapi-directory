import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableRackOuterUnitEnum {
    Mm = "mm",
    In = "in"
}
export declare enum WritableRackStatusEnum {
    Reserved = "reserved",
    Available = "available",
    Planned = "planned",
    Active = "active",
    Deprecated = "deprecated"
}
export declare enum WritableRackTypeEnum {
    TwoPostFrame = "2-post-frame",
    FourPostFrame = "4-post-frame",
    FourPostCabinet = "4-post-cabinet",
    WallFrame = "wall-frame",
    WallCabinet = "wall-cabinet"
}
/**
 * Rail-to-rail width
 */
export declare enum WritableRackWidthEnum {
    Ten = "10",
    Nineteen = "19",
    TwentyOne = "21",
    TwentyThree = "23"
}
export declare class WritableRackInput extends SpeakeasyBase {
    /**
     * A unique tag used to identify this rack
     */
    assetTag?: string;
    comments?: string;
    customFields?: Record<string, any>;
    /**
     * Units are numbered top-to-bottom
     */
    descUnits?: boolean;
    /**
     * Locally-assigned identifier
     */
    facilityId?: string;
    /**
     * Assigned group
     */
    group?: number;
    name: string;
    /**
     * Outer dimension of rack (depth)
     */
    outerDepth?: number;
    outerUnit?: WritableRackOuterUnitEnum;
    /**
     * Outer dimension of rack (width)
     */
    outerWidth?: number;
    /**
     * Functional role
     */
    role?: number;
    serial?: string;
    site: number;
    status?: WritableRackStatusEnum;
    tags?: string[];
    tenant?: number;
    type?: WritableRackTypeEnum;
    /**
     * Height in rack units
     */
    uHeight?: number;
    /**
     * Rail-to-rail width
     */
    width?: WritableRackWidthEnum;
}
