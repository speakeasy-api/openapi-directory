import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { ProductMessagesEnum } from "./productmessagesenum";
/**
 * Messages
**/
export declare class Messages extends SpeakeasyBase {
    accountId: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction: DirectionEnum;
    from?: string;
    id?: string;
    includeMessage?: boolean;
    includeSubaccounts?: boolean;
    product: ProductMessagesEnum;
    to?: string;
}
