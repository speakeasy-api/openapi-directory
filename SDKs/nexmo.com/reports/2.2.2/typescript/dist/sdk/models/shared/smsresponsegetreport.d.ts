import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { DirectionEnum } from "./directionenum";
import { ProductSmsEnum } from "./productsmsenum";
import { RequestStatusEnum } from "./requeststatusenum";
import { SmsStatusEnum } from "./smsstatusenum";
/**
 * SMS
**/
export declare class SmsResponseGetReport extends SpeakeasyBase {
    links?: Links;
    accountId: string;
    accountRef?: string;
    callbackUrl?: string;
    clientRef?: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction: DirectionEnum;
    from?: string;
    includeMessage?: boolean;
    includeSubaccounts?: boolean;
    itemsCount?: number;
    network?: string;
    product: ProductSmsEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusEnum;
    showConcatenated?: boolean;
    startTime?: Date;
    status?: SmsStatusEnum;
    to?: string;
}
