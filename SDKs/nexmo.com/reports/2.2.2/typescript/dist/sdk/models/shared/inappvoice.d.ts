import { SpeakeasyBase } from "../../../internal/utils";
import { ProductInAppVoiceEnum } from "./productinappvoiceenum";
/**
 * In App Voice
**/
export declare class InAppVoice extends SpeakeasyBase {
    accountId: string;
    callbackUrl?: string;
    conversationId?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    product: ProductInAppVoiceEnum;
}
