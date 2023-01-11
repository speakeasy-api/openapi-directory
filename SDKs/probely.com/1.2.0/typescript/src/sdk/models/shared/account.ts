import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAutoCollectionEnum } from "./accountautocollectionenum";
import { Plan } from "./plan";
import { AccountStatusEnum } from "./accountstatusenum";



export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_collection" })
  autoCollection?: AccountAutoCollectionEnum;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=balance_currency_code" })
  balanceCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=free_target_quantity" })
  freeTargetQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=has_used_trial" })
  hasUsedTrial?: boolean;

  @SpeakeasyMetadata({ data: "json, name=heroku" })
  heroku?: boolean;

  @SpeakeasyMetadata({ data: "json, name=next_billing_at" })
  nextBillingAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: Plan;

  @SpeakeasyMetadata({ data: "json, name=plan_target_quantity" })
  planTargetQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=pool_size" })
  poolSize?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=trialEnd" })
  trialEnd?: Date;
}
