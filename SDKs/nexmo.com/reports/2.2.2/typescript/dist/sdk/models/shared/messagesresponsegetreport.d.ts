import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { DirectionEnum } from "./directionenum";
import { ProductMessagesEnum } from "./productmessagesenum";
import { RequestStatusEnum } from "./requeststatusenum";
/**
 * Messages
**/
export declare class MessagesResponseGetReport extends SpeakeasyBase {
    links?: Links;
    accountId: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction: DirectionEnum;
    from?: string;
    id?: string;
    includeMessage?: boolean;
    includeSubaccounts?: boolean;
    itemsCount?: number;
    product: ProductMessagesEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusEnum;
    startTime?: Date;
    to?: string;
}
