import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { Dimensions } from "./dimensions";
import { LabelMessages } from "./labelmessages";
import { Weight } from "./weight";



// PackageMonetaryValue
/** 
 * A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
 * 
**/
export class PackageMonetaryValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: CurrencyEnum;
}


// PackageInput
/** 
 * A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
**/
export class PackageInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @SpeakeasyMetadata({ data: "json, name=external_package_id" })
  externalPackageId?: string;

  @SpeakeasyMetadata({ data: "json, name=insured_value" })
  insuredValue?: PackageMonetaryValue;

  @SpeakeasyMetadata({ data: "json, name=label_messages" })
  labelMessages?: LabelMessages;

  @SpeakeasyMetadata({ data: "json, name=package_code" })
  packageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight: Weight;
}


// Package
/** 
 * A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
**/
export class Package extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @SpeakeasyMetadata({ data: "json, name=external_package_id" })
  externalPackageId?: string;

  @SpeakeasyMetadata({ data: "json, name=insured_value" })
  insuredValue?: PackageMonetaryValue;

  @SpeakeasyMetadata({ data: "json, name=label_messages" })
  labelMessages?: LabelMessages;

  @SpeakeasyMetadata({ data: "json, name=package_code" })
  packageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_number" })
  trackingNumber?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight: Weight;
}
