import { SpeakeasyBase } from "../../../internal/utils";
export declare class CampaignDataRequest extends SpeakeasyBase {
    attachments?: Record<string, any>[];
    channelType?: string;
    defaults?: Record<string, string>;
    description?: string;
    name: string;
    segmentId: string;
    senderId: string;
    text: string;
}
