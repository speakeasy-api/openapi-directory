import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { ProductAsrEnum } from "./productasrenum";
import { AsrStatusEnum } from "./asrstatusenum";
/**
 * ASR
**/
export declare class Asr extends SpeakeasyBase {
    accountId: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction?: DirectionEnum;
    from?: string;
    includeSubaccounts?: boolean;
    product: ProductAsrEnum;
    status?: AsrStatusEnum;
    to?: string;
}
