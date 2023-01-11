import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account-ref" })
  accountRef?: string;

  @SpeakeasyMetadata({ data: "json, name=client-ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=message-id" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=message-price" })
  messagePrice?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=remaining-balance" })
  remainingBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}
