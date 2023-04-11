import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Current SID filtering state.
 */
export declare enum OnPremDomainSIDDetailsSIDFilteringStateEnum {
    SidFilteringStateUnspecified = "SID_FILTERING_STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.
 */
export declare class OnPremDomainSIDDetails extends SpeakeasyBase {
    /**
     * FQDN of the on-prem domain being migrated.
     */
    name?: string;
    /**
     * Current SID filtering state.
     */
    sidFilteringState?: OnPremDomainSIDDetailsSIDFilteringStateEnum;
}
