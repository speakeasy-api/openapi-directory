import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The type indicating if it's carrier or ISP.
 */
export declare enum CarrierAndIspTargetingOptionDetailsTypeEnum {
    CarrierAndIspTypeUnspecified = "CARRIER_AND_ISP_TYPE_UNSPECIFIED",
    CarrierAndIspTypeIsp = "CARRIER_AND_ISP_TYPE_ISP",
    CarrierAndIspTypeCarrier = "CARRIER_AND_ISP_TYPE_CARRIER"
}
/**
 * Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
 */
export declare class CarrierAndIspTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The display name of the carrier or ISP.
     */
    displayName?: string;
    /**
     * Output only. The type indicating if it's carrier or ISP.
     */
    type?: CarrierAndIspTargetingOptionDetailsTypeEnum;
}
