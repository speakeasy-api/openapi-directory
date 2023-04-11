import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status to update the limit with.
 */
export declare enum UpdateALimitParametersStatusEnum {
    Inactive = "inactive",
    Active = "active"
}
export declare class UpdateALimitParameters extends SpeakeasyBase {
    /**
     * The status to update the limit with.
     */
    status: UpdateALimitParametersStatusEnum;
}
