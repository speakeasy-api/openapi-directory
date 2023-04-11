import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter groundhogs by type (actual, alive groundhogs, or other prognosticators)
 */
export declare enum GroundhogsIsGroundhogEnum {
    One = "1",
    Zero = "0",
    True = "true",
    False = "false"
}
export declare class GroundhogsRequest extends SpeakeasyBase {
    /**
     * Filter groundhogs by country of origin (USA or Canada).
     */
    country?: string;
    /**
     * Filter groundhogs by type (actual, alive groundhogs, or other prognosticators)
     */
    isGroundhog?: GroundhogsIsGroundhogEnum;
}
/**
 * OK
 */
export declare class Groundhogs200ApplicationJSON extends SpeakeasyBase {
    groundhogs?: shared.Groundhog[];
}
export declare class GroundhogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    groundhogs200ApplicationJSONObject?: Groundhogs200ApplicationJSON;
}
