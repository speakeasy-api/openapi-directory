import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BankTransferBalanceGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BankTransferBalanceGetRequest;
}


export class BankTransferBalanceGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bankTransferBalanceGetResponse?: Record<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
