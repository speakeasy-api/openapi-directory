import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { ProductSmsEnum } from "./productsmsenum";
import { SmsStatusEnum } from "./smsstatusenum";
/**
 * SMS
**/
export declare class Sms extends SpeakeasyBase {
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
    network?: string;
    product: ProductSmsEnum;
    showConcatenated?: boolean;
    status?: SmsStatusEnum;
    to?: string;
}
