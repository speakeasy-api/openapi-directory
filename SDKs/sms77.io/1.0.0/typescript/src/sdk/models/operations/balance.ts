import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  balance200TextPlainFloatNumber?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
