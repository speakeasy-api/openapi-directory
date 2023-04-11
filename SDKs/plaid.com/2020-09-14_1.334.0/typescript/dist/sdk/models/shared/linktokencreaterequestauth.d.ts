import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This field has been deprecated in favor of `auth_type_select_enabled`.
 */
export declare enum LinkTokenCreateRequestAuthFlowTypeEnum {
    FlexibleAuth = "FLEXIBLE_AUTH"
}
/**
 * Specifies options for initializing Link for use with the Auth product. This field can be used to enable or disable extended Auth flows for the resulting Link session. Omitting any field will result in a default that can be configured by your account manager.
 */
export declare class LinkTokenCreateRequestAuth extends SpeakeasyBase {
    /**
     * Specifies whether Auth Type Select is enabled for the Link session, allowing the end user to choose between linking instantly or manually prior to selecting their financial institution. Note that this can only be true if `same_day_microdeposits_enabled` is set to true.
     */
    authTypeSelectEnabled?: boolean;
    /**
     * Specifies whether the Link session is enabled for the Automated Micro-deposits flow.
     */
    automatedMicrodepositsEnabled?: boolean;
    /**
     * This field has been deprecated in favor of `auth_type_select_enabled`.
     */
    flowType?: LinkTokenCreateRequestAuthFlowTypeEnum;
    /**
     * Specifies whether the Link session is enabled for the Instant Match flow. As of November 2022, Instant Match will be enabled by default. Instant Match can be disabled by setting this field to `false`.
     */
    instantMatchEnabled?: boolean;
    /**
     * Specifies whether the Link session is enabled for the Same Day Micro-deposits flow.
     */
    sameDayMicrodepositsEnabled?: boolean;
}
