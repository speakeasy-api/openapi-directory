import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateReport } from "./linkscreatereport";
import { DirectionEnum } from "./directionenum";
import { ProductSmsEnum } from "./productsmsenum";
import { RequestStatusCreateReportEnum } from "./requeststatuscreatereportenum";
import { SmsStatusEnum } from "./smsstatusenum";



// SmsResponseCreateReport
/** 
 * SMS
**/
export class SmsResponseCreateReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: LinksCreateReport;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=account_ref" })
  accountRef?: string;

  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=client_ref" })
  clientRef?: string;

  @SpeakeasyMetadata({ data: "json, name=date_end" })
  dateEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_start" })
  dateStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction: DirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=include_message" })
  includeMessage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=include_subaccounts" })
  includeSubaccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: ProductSmsEnum;

  @SpeakeasyMetadata({ data: "json, name=receive_time" })
  receiveTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: RequestStatusCreateReportEnum;

  @SpeakeasyMetadata({ data: "json, name=show_concatenated" })
  showConcatenated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SmsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}
