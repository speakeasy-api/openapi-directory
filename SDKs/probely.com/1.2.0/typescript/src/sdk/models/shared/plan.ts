import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanChargeModelEnum } from "./planchargemodelenum";
import { BillingPeriodUnitEnum } from "./billingperiodunitenum";



export class Plan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_scan_profiles" })
  allowedScanProfiles?: string[];

  @SpeakeasyMetadata({ data: "json, name=charge_model" })
  chargeModel?: PlanChargeModelEnum;

  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_trial" })
  isTrial?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: string;

  @SpeakeasyMetadata({ data: "json, name=period_unit" })
  periodUnit?: BillingPeriodUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;
}
