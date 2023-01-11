import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpsInvoice } from "./upsinvoice";
import { AncillaryServiceEndorsementEnum } from "./ancillaryserviceendorsementenum";
import { UpsPickupTypeEnum } from "./upspickuptypeenum";



// UpsSettingsResponseBody
/** 
 * UPS account settings
**/
export class UpsSettingsResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_postal_code" })
  accountPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice" })
  invoice?: UpsInvoice;

  @SpeakeasyMetadata({ data: "json, name=is_primary_account" })
  isPrimaryAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mail_innovations_cost_center" })
  mailInnovationsCostCenter?: string;

  @SpeakeasyMetadata({ data: "json, name=mail_innovations_endorsement" })
  mailInnovationsEndorsement?: AncillaryServiceEndorsementEnum;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=pickup_type" })
  pickupType?: UpsPickupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=use_carbon_neutral_shipping_program" })
  useCarbonNeutralShippingProgram?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_consolidation_services" })
  useConsolidationServices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_ground_freight_pricing" })
  useGroundFreightPricing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_negotiated_rates" })
  useNegotiatedRates?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_order_number_on_mail_innovations_labels" })
  useOrderNumberOnMailInnovationsLabels?: boolean;
}
