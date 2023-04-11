import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Properties specific to a RichLink.
 */
export declare class RichLinkProperties extends SpeakeasyBase {
    /**
     * Output only. The [MIME type](https://developers.google.com/drive/api/v3/mime-types) of the RichLink, if there's one (for example, when it's a file in Drive).
     */
    mimeType?: string;
    /**
     * Output only. The title of the RichLink as displayed in the link. This title matches the title of the linked resource at the time of the insertion or last update of the link. This field is always present.
     */
    title?: string;
    /**
     * Output only. The URI to the RichLink. This is always present.
     */
    uri?: string;
}
