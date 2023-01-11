import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { ProductWebsocketEnum } from "./productwebsocketenum";
import { RequestStatusEnum } from "./requeststatusenum";
/**
 * WebSocket Call
**/
export declare class WebsocketCallResponseGetReport extends SpeakeasyBase {
    links?: Links;
    accountId?: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    itemsCount?: number;
    product?: ProductWebsocketEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusEnum;
    startTime?: Date;
    status?: string;
}
