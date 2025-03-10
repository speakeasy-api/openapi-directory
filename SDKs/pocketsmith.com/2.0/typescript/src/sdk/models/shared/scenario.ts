/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The type of the scenario.
 */
export enum ScenarioTypeEnum {
  NoInterest = "no-interest",
  Savings = "savings",
  Debt = "debt",
}

export class Scenario extends SpeakeasyBase {
  /**
   * For goals, the date that they should be achieved by.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "achieve_date" })
  achieveDate?: string;

  /**
   * The closing balance of the scenario.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "closing_balance" })
  closingBalance?: number;

  /**
   * The date of the closing balance.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "closing_balance_date" })
  closingBalanceDate?: string;

  /**
   * When the scenario was created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  createdAt?: string;

  /**
   * The current balance of the scenario.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "current_balance" })
  currentBalance?: number;

  /**
   * The date of the current balance.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "current_balance_date" })
  currentBalanceDate?: string;

  /**
   * The exchange rate between the scenario's currency and the user's base currency, when different. If the currencies are the same, null is returned.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "current_balance_exchange_rate" })
  currentBalanceExchangeRate?: number;

  /**
   * The current balance of the scenario in the user's base currency.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "current_balance_in_base_currency" })
  currentBalanceInBaseCurrency?: number;

  /**
   * A short description of what the scenario is modelling.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The unique identifier of the scenario.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  /**
   * The amount of interest to apply to the balance. Will apply periodically depending on what `interest_rate_repeat_id` is set to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "interest_rate" })
  interestRate?: number;

  /**
   * A number representing how often the interest should be applied. 0 is used for no interest, 2 is weekly, 3 is fortnightly, 4 is monthly, 5 is yearly and 7 for quarterly.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "interest_rate_repeat_id" })
  interestRateRepeatId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "maximum-value" })
  maximumValue?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "minimum-value" })
  minimumValue?: number;

  /**
   * The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not activated, then null is returned.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "safe_balance" })
  safeBalance?: number;

  /**
   * The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not available, then null is returned.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "safe_balance_in_base_currency" })
  safeBalanceInBaseCurrency?: number;

  /**
   * The starting balance of the scenario.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "starting_balance" })
  startingBalance?: number;

  /**
   * The date of the starting balance.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "starting_balance_date" })
  startingBalanceDate?: string;

  /**
   * The title of the scenario.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  /**
   * The type of the scenario.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: ScenarioTypeEnum;

  /**
   * When the scenario was last updated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  updatedAt?: string;
}
