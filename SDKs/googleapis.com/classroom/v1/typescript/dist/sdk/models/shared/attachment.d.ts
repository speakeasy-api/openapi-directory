import { SpeakeasyBase } from "../../../internal/utils";
import { DriveFile } from "./drivefile";
import { Form } from "./form";
import { Link } from "./link";
import { YouTubeVideo } from "./youtubevideo";
/**
 * Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.
 */
export declare class Attachment extends SpeakeasyBase {
    /**
     * Representation of a Google Drive file.
     */
    driveFile?: DriveFile;
    /**
     * Google Forms item.
     */
    form?: Form;
    /**
     * URL item.
     */
    link?: Link;
    /**
     * YouTube video item.
     */
    youTubeVideo?: YouTubeVideo;
}
