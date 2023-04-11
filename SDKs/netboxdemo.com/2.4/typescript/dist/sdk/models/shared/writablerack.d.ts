import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableRackTypeEnum {
    OneHundred = "100",
    TwoHundred = "200",
    ThreeHundred = "300",
    OneThousand = "1000",
    OneThousandOneHundred = "1100"
}
/**
 * Rail-to-rail width
 */
export declare enum WritableRackWidthEnum {
    Nineteen = "19",
    TwentyThree = "23"
}
export declare class WritableRackInput extends SpeakeasyBase {
    comments?: string;
    customFields?: Record<string, any>;
    /**
     * Units are numbered top-to-bottom
     */
    descUnits?: boolean;
    facilityId?: string;
    group?: number;
    name: string;
    role?: number;
    serial?: string;
    site: number;
    tags?: string[];
    tenant?: number;
    type?: WritableRackTypeEnum;
    uHeight?: number;
    /**
     * Rail-to-rail width
     */
    width?: WritableRackWidthEnum;
}
