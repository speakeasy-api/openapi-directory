import { SpeakeasyBase } from "../../../internal/utils";
import { Form } from "./form";
import { Link } from "./link";
import { SharedDriveFile } from "./shareddrivefile";
import { YouTubeVideo } from "./youtubevideo";
/**
 * Material attached to course work. When creating attachments, setting the `form` field is not supported.
 */
export declare class Material extends SpeakeasyBase {
    /**
     * Drive file that is used as material for course work.
     */
    driveFile?: SharedDriveFile;
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
    youtubeVideo?: YouTubeVideo;
}
