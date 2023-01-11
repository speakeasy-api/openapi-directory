import { SpeakeasyBase } from "../../../internal/utils";
import { UpsInvoice } from "./upsinvoice";
import { AncillaryServiceEndorsementEnum } from "./ancillaryserviceendorsementenum";
import { UpsPickupTypeEnum } from "./upspickuptypeenum";
/**
 * UPS account settings
**/
export declare class UpdateUpsSettingsRequestBody extends SpeakeasyBase {
    accountPostalCode?: string;
    invoice?: UpsInvoice;
    isPrimaryAccount?: boolean;
    mailInnovationsCostCenter?: string;
    mailInnovationsEndorsement?: AncillaryServiceEndorsementEnum;
    nickname?: string;
    pickupType?: UpsPickupTypeEnum;
    useCarbonNeutralShippingProgram?: boolean;
    useConsolidationServices?: boolean;
    useGroundFreightPricing?: boolean;
    useNegotiatedRates?: boolean;
    useOrderNumberOnMailInnovationsLabels?: boolean;
}
