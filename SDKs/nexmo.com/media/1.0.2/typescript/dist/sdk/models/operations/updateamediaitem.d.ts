import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateAMediaItemRequestBody extends SpeakeasyBase {
    /**
     * A description of the media file.
     */
    description?: string;
    /**
     * The maximum number of times the file may be downloaded. Unlimited when not provided.
     */
    maxDownloadsAllowed?: number;
    /**
     * A string containing metadata about the media file.
     */
    metadataPrimary?: string;
    /**
     * A string containing further metadata about the media file.
     */
    metadataSecondary?: string;
    /**
     * The MIME type of the media file.
     */
    mimeType?: string;
    /**
     * Whether the item is publicly available without authentication.
     */
    public?: boolean;
    /**
     * A string containing a title for the media file.
     */
    title?: string;
}
export declare class UpdateAMediaItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
