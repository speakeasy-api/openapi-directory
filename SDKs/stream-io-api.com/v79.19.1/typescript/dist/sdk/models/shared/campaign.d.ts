import { SpeakeasyBase } from "../../../internal/utils";
export declare class Campaign extends SpeakeasyBase {
    attachments: Record<string, any>[];
    channelType: string;
    completedAt?: Date;
    createdAt: Date;
    defaults: Record<string, string>;
    description: string;
    details?: string;
    erroredMessages?: number;
    failedAt?: Date;
    id: string;
    name: string;
    resumedAt?: Date;
    scheduledAt?: Date;
    scheduledFor?: Date;
    segmentId: string;
    senderId: string;
    sentMessages?: number;
    status?: string;
    stoppedAt?: Date;
    taskId?: string;
    text: string;
    updatedAt: Date;
}
