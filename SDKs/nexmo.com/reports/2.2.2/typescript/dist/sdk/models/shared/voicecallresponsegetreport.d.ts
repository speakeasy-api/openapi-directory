import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { DirectionEnum } from "./directionenum";
import { ProductVoiceEnum } from "./productvoiceenum";
import { RequestStatusEnum } from "./requeststatusenum";
import { VoiceStatusEnum } from "./voicestatusenum";
/**
 * Voice Call
**/
export declare class VoiceCallResponseGetReport extends SpeakeasyBase {
    links?: Links;
    accountId?: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction?: DirectionEnum;
    from?: string;
    includeSubaccounts?: boolean;
    itemsCount?: number;
    network?: string;
    product?: ProductVoiceEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusEnum;
    startTime?: Date;
    status?: VoiceStatusEnum;
    to?: string;
}
