import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CsvConversations
/** 
 * Conversations
**/
export class CsvConversations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=application_id" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_id" })
  conversationId?: string;

  @SpeakeasyMetadata({ data: "json, name=creation_date" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=total_price" })
  totalPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}
