import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { AsrStatusEnum } from "./asrstatusenum";
/**
 * ASR
**/
export declare class CsvAsr extends SpeakeasyBase {
    accountId?: string;
    callDateStart?: Date;
    callId?: string;
    currency?: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction?: DirectionEnum;
    duration?: number;
    from?: string;
    price?: number;
    status?: AsrStatusEnum;
    statusDescription?: string;
    to?: string;
    totalPrice?: number;
}
