import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Advanced options that are specific to the carrier
**/
export declare class GetCarrierOptionsResponseBodyCarrierAdvancedOption extends SpeakeasyBase {
    defaultValue?: string;
    description?: string;
    name?: string;
}
/**
 * A carrier list options response body
**/
export declare class GetCarrierOptionsResponseBody extends SpeakeasyBase {
    options?: GetCarrierOptionsResponseBodyCarrierAdvancedOption[];
}
