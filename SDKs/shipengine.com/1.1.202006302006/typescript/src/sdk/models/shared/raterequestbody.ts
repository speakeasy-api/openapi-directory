import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";



// RateRequestBody
/** 
 * A rate request body
**/
export class RateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calculate_tax_amount" })
  calculateTaxAmount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=carrier_ids" })
  carrierIds: string[];

  @SpeakeasyMetadata({ data: "json, name=package_types" })
  packageTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=preferred_currency" })
  preferredCurrency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=service_codes" })
  serviceCodes?: string[];
}
