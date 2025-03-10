import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";



// GetRateByIdResponseBodyMonetaryValue
/** 
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 * 
**/
export class GetRateByIdResponseBodyMonetaryValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: CurrencyEnum;
}


// GetRateByIdResponseBody
/** 
 * A rate
**/
export class GetRateByIdResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_code" })
  carrierCode: string;

  @SpeakeasyMetadata({ data: "json, name=carrier_delivery_days" })
  carrierDeliveryDays?: string;

  @SpeakeasyMetadata({ data: "json, name=carrier_friendly_name" })
  carrierFriendlyName: string;

  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=carrier_nickname" })
  carrierNickname: string;

  @SpeakeasyMetadata({ data: "json, name=confirmation_amount" })
  confirmationAmount: GetRateByIdResponseBodyMonetaryValue;

  @SpeakeasyMetadata({ data: "json, name=delivery_days" })
  deliveryDays?: number;

  @SpeakeasyMetadata({ data: "json, name=error_messages" })
  errorMessages: string[];

  @SpeakeasyMetadata({ data: "json, name=estimated_delivery_date" })
  estimatedDeliveryDate?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=guaranteed_service" })
  guaranteedService: boolean;

  @SpeakeasyMetadata({ data: "json, name=insurance_amount" })
  insuranceAmount: GetRateByIdResponseBodyMonetaryValue;

  @SpeakeasyMetadata({ data: "json, name=negotiated_rate" })
  negotiatedRate: boolean;

  @SpeakeasyMetadata({ data: "json, name=other_amount" })
  otherAmount: GetRateByIdResponseBodyMonetaryValue;

  @SpeakeasyMetadata({ data: "json, name=package_type" })
  packageType: string;

  @SpeakeasyMetadata({ data: "json, name=rate_id" })
  rateId: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=rate_type" })
  rateType: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=service_code" })
  serviceCode: string;

  @SpeakeasyMetadata({ data: "json, name=service_type" })
  serviceType: string;

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=shipping_amount" })
  shippingAmount: GetRateByIdResponseBodyMonetaryValue;

  @SpeakeasyMetadata({ data: "json, name=tax_amount" })
  taxAmount?: GetRateByIdResponseBodyMonetaryValue;

  @SpeakeasyMetadata({ data: "json, name=trackable" })
  trackable: boolean;

  @SpeakeasyMetadata({ data: "json, name=validation_status" })
  validationStatus: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=warning_messages" })
  warningMessages: string[];

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone: number;
}
