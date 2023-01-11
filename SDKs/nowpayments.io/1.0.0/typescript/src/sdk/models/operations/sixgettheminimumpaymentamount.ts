import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SixGetTheMinimumPaymentAmountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency_from" })
  currencyFrom?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency_to" })
  currencyTo?: string;
}


export class SixGetTheMinimumPaymentAmount200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency_from" })
  currencyFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=currency_to" })
  currencyTo?: string;

  @SpeakeasyMetadata({ data: "json, name=min_amount" })
  minAmount?: number;
}


export class SixGetTheMinimumPaymentAmountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SixGetTheMinimumPaymentAmountQueryParams;
}


export class SixGetTheMinimumPaymentAmountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sixGetTheMinimumPaymentAmount200ApplicationJSONObject?: SixGetTheMinimumPaymentAmount200ApplicationJson;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
