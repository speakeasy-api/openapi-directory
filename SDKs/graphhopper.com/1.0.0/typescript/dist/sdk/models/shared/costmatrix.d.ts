import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional information for your request
 */
export declare class CostMatrixDataInfo extends SpeakeasyBase {
    copyrights?: string[];
    took?: number;
}
/**
 * JSON data of matrix response
 */
export declare class CostMatrixData extends SpeakeasyBase {
    distances?: number[][];
    /**
     * Additional information for your request
     */
    info?: CostMatrixDataInfo;
    times?: number[][];
}
/**
 * type of cost matrix, currently default or google are supported
 */
export declare enum CostMatrixTypeEnum {
    Default = "default",
    Google = "google"
}
export declare class CostMatrix extends SpeakeasyBase {
    /**
     * JSON data of matrix response
     */
    data?: CostMatrixData;
    locationIds?: string[];
    /**
     * vehicle profile or empty if catch all fallback
     */
    profile?: string;
    /**
     * type of cost matrix, currently default or google are supported
     */
    type?: CostMatrixTypeEnum;
}
