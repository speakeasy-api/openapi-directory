import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChannelExportRequest extends SpeakeasyBase {
    cid?: string;
    /**
     * Channel ID
     */
    id?: string;
    /**
     * Date to export messages since
     */
    messagesSince?: Date;
    /**
     * Date to export messages until
     */
    messagesUntil?: Date;
    /**
     * Channel type
     */
    type?: string;
}
