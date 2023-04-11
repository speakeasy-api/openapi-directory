import { SpeakeasyBase } from "../../../internal/utils";
export declare class LiveStreamSnippet extends SpeakeasyBase {
    /**
     * The ID that YouTube uses to uniquely identify the channel that is transmitting the stream.
     */
    channelId?: string;
    /**
     * The stream's description. The value cannot be longer than 10000 characters.
     */
    description?: string;
    isDefaultStream?: boolean;
    /**
     * The date and time that the stream was created.
     */
    publishedAt?: Date;
    /**
     * The stream's title. The value must be between 1 and 128 characters long.
     */
    title?: string;
}
