import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { ProductVoiceEnum } from "./productvoiceenum";
import { VoiceStatusEnum } from "./voicestatusenum";
/**
 * Voice Call
**/
export declare class VoiceCall extends SpeakeasyBase {
    accountId: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction?: DirectionEnum;
    from?: string;
    includeSubaccounts?: boolean;
    network?: string;
    product: ProductVoiceEnum;
    status?: VoiceStatusEnum;
    to?: string;
}
