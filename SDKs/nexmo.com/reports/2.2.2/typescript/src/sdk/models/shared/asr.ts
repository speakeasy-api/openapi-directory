import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { ProductAsrEnum } from "./productasrenum";
import { AsrStatusEnum } from "./asrstatusenum";



// Asr
/** 
 * ASR
**/
export class Asr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

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

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: ProductAsrEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AsrStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}
