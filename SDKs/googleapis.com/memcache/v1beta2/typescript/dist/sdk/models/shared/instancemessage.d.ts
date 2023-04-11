import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A code that correspond to one type of user-facing message.
 */
export declare enum InstanceMessageCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    ZoneDistributionUnbalanced = "ZONE_DISTRIBUTION_UNBALANCED"
}
export declare class InstanceMessage extends SpeakeasyBase {
    /**
     * A code that correspond to one type of user-facing message.
     */
    code?: InstanceMessageCodeEnum;
    /**
     * Message on memcached instance which will be exposed to users.
     */
    message?: string;
}
