import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { VoiceStatusEnum } from "./voicestatusenum";
/**
 * Voice Call
**/
export declare class CsvVoice extends SpeakeasyBase {
    accountId?: string;
    callId?: string;
    country?: string;
    countryName?: string;
    currency?: string;
    dateEnd?: Date;
    dateStart?: Date;
    direction?: DirectionEnum;
    duration?: number;
    from?: string;
    network?: string;
    networkName?: string;
    price?: number;
    status?: VoiceStatusEnum;
    statusDescription?: string;
    to?: string;
    totalPrice?: number;
}
