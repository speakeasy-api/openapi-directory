import { SpeakeasyBase } from "../../../internal/utils";
import { AncillaryServiceEndorsementEnum } from "./ancillaryserviceendorsementenum";
import { UpsInvoice } from "./upsinvoice";
import { UpsPickupTypeEnum } from "./upspickuptypeenum";
/**
 * UPS account settings
 */
export declare class UpsSettingsResponseBody extends SpeakeasyBase {
    /**
     * account postal code
     */
    accountPostalCode?: string;
    /**
     * The invoice
     */
    invoice?: UpsInvoice;
    /**
     * Indicates if this is the primary UPS account
     */
    isPrimaryAccount?: boolean;
    /**
     * mail innovations cost center
     */
    mailInnovationsCostCenter?: string;
    mailInnovationsEndorsement?: AncillaryServiceEndorsementEnum;
    /**
     * nickname
     */
    nickname?: string;
    pickupType?: UpsPickupTypeEnum;
    /**
     * The use carbon neutral shipping program
     */
    useCarbonNeutralShippingProgram?: boolean;
    /**
     * The use consolidation services
     */
    useConsolidationServices?: boolean;
    /**
     * The use ground freight pricing
     */
    useGroundFreightPricing?: boolean;
    /**
     * The use negotiated rates
     */
    useNegotiatedRates?: boolean;
    /**
     * The use order number on mail innovations labels
     */
    useOrderNumberOnMailInnovationsLabels?: boolean;
}
