import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateReport } from "./linkscreatereport";
import { ProductInAppVoiceEnum } from "./productinappvoiceenum";
import { RequestStatusCreateReportEnum } from "./requeststatuscreatereportenum";



// InAppVoiceResponseCreateReport
/** 
 * In App Voice
**/
export class InAppVoiceResponseCreateReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: LinksCreateReport;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_id" })
  conversationId?: string;

  @SpeakeasyMetadata({ data: "json, name=date_end" })
  dateEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_start" })
  dateStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=include_subaccounts" })
  includeSubaccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: ProductInAppVoiceEnum;

  @SpeakeasyMetadata({ data: "json, name=receive_time" })
  receiveTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: RequestStatusCreateReportEnum;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;
}
