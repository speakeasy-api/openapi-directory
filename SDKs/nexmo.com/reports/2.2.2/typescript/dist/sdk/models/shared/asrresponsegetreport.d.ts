import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { DirectionEnum } from "./directionenum";
import { ProductAsrEnum } from "./productasrenum";
import { RequestStatusEnum } from "./requeststatusenum";
import { AsrStatusEnum } from "./asrstatusenum";
/**
 * ASR
**/
export declare class AsrResponseGetReport extends SpeakeasyBase {
    links?: Links;
    accountId?: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction?: DirectionEnum;
    from?: string;
    includeSubaccounts?: boolean;
    itemsCount?: number;
    product?: ProductAsrEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusEnum;
    startTime?: Date;
    status?: AsrStatusEnum;
    to?: string;
}
