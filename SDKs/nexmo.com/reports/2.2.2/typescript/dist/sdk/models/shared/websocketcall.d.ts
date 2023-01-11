import { SpeakeasyBase } from "../../../internal/utils";
import { ProductWebsocketEnum } from "./productwebsocketenum";
/**
 * WebSocket Call
**/
export declare class WebsocketCall extends SpeakeasyBase {
    accountId: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    product: ProductWebsocketEnum;
    status?: string;
}
