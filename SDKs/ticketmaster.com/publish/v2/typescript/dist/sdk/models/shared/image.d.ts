import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImageRatioEnum {
    Sixteen9 = "16_9",
    Three2 = "3_2",
    Four3 = "4_3"
}
/**
 * Image
**/
export declare class Image extends SpeakeasyBase {
    attribution?: string;
    domains?: string[];
    fallback?: boolean;
    height?: number;
    ratio?: ImageRatioEnum;
    url?: string;
    width?: number;
}
