import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1StatusesSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
/**
 * Visibility of the posted status. Enumerable oneOf public, unlisted, private, direct.
 */
export declare enum PostApiV1StatusesRequestBodyVisibilityEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private",
    Direct = "direct"
}
export declare class PostApiV1StatusesRequestBody extends SpeakeasyBase {
    /**
     * ID of the status being replied to, if status is a reply
     */
    inReplyToId?: string;
    /**
     * ISO 639 language code for this status.
     */
    language?: string;
    /**
     * Array of Attachment ids to be attached as media. If provided, `status` becomes optional, and `poll` cannot be used.
     */
    mediaIds?: string[];
    poll?: Record<string, any>[];
    /**
     * ISO 8601 Datetime at which to schedule a status. Providing this paramter will cause ScheduledStatus to be returned instead of Status. Must be at least 5 minutes in the future.
     */
    scheduledAt?: string;
    /**
     * Mark status and attached media as sensitive?
     */
    sensitive?: boolean;
    /**
     * Text to be shown as a warning or subject before the actual content. Statuses are generally collapsed behind this field.
     */
    spoilerText?: string;
    /**
     * Text content of the status. If `media_ids` is provided, this becomes optional. Attaching a `poll` is optional while `status` is provided.
     */
    status?: string;
    /**
     * Visibility of the posted status. Enumerable oneOf public, unlisted, private, direct.
     */
    visibility?: PostApiV1StatusesRequestBodyVisibilityEnum;
}
export declare class PostApiV1StatusesRequest extends SpeakeasyBase {
    /**
     * Prevent duplicate submissions of the same status. Idempotency keys are stored for up to 1 hour, and can be any arbitrary string. Consider using a hash or UUID generated client-side.
     */
    idempotencyKey?: string;
    requestBody?: PostApiV1StatusesRequestBody[];
}
export declare class PostApiV1StatusesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Status will be posted with chosen parameters. If scheduled_at is provided, then a ScheduledStatus will be returned instead.
     */
    postApiV1Statuses200ApplicationJSONOneOf?: any;
}
