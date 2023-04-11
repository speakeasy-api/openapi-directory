import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.
 */
export declare class OnPremDomainDetails extends SpeakeasyBase {
    /**
     * Optional. Option to disable SID filtering.
     */
    disableSidFiltering?: boolean;
    /**
     * Required. FQDN of the on-prem domain being migrated.
     */
    domainName?: string;
}
