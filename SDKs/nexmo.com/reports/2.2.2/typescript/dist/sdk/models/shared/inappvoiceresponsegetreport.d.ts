import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { ProductInAppVoiceEnum } from "./productinappvoiceenum";
import { RequestStatusEnum } from "./requeststatusenum";
/**
 * In App Voice
**/
export declare class InAppVoiceResponseGetReport extends SpeakeasyBase {
    links?: Links;
    accountId?: string;
    callbackUrl?: string;
    conversationId?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    itemsCount?: number;
    product?: ProductInAppVoiceEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusEnum;
    startTime?: Date;
}
