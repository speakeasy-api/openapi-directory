import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelExportRequest } from "./channelexportrequest";
export declare class ExportChannelsRequest extends SpeakeasyBase {
    /**
     * Export options for channels
     */
    channels?: ChannelExportRequest[];
    /**
     * Set if deleted message text should be cleared
     */
    clearDeletedMessageText?: boolean;
    exportUsers?: boolean;
    /**
     * Set if you want to include truncated messages
     */
    includeTruncatedMessages?: boolean;
    version?: string;
}
