import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlaceResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum PlaceResponseMessageEnum {
    Success = "Success"
}
export declare class PlaceResponseResult extends SpeakeasyBase {
    /**
     * List of up to 10 matching places
     *
     * @remarks
     *
     */
    hits: any[];
}
/**
 * Success
 */
export declare class PlaceResponse extends SpeakeasyBase {
    code: PlaceResponseCodeEnum;
    message: PlaceResponseMessageEnum;
    result: PlaceResponseResult;
}
