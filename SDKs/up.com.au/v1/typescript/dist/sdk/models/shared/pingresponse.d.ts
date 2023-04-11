import { SpeakeasyBase } from "../../../internal/utils";
export declare class PingResponseMeta extends SpeakeasyBase {
    /**
     * The unique identifier of the authenticated customer.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * A cute emoji that represents the response status.
     *
     * @remarks
     *
     */
    statusEmoji: string;
}
/**
 * Basic ping response to verify authentication.
 *
 * @remarks
 *
 */
export declare class PingResponse extends SpeakeasyBase {
    meta: PingResponseMeta;
}
