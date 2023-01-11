import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { DirectionEnum } from "./directionenum";
import { ProductAsrEnum } from "./productasrenum";
import { RequestStatusEnum } from "./requeststatusenum";
import { AsrStatusEnum } from "./asrstatusenum";



// AsrResponseGetReport
/** 
 * ASR
**/
export class AsrResponseGetReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=date_end" })
  dateEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_start" })
  dateStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: DirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=include_subaccounts" })
  includeSubaccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=items_count" })
  itemsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: ProductAsrEnum;

  @SpeakeasyMetadata({ data: "json, name=receive_time" })
  receiveTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_status" })
  requestStatus?: RequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AsrStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}
