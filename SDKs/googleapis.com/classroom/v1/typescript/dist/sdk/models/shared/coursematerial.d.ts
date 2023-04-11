import { SpeakeasyBase } from "../../../internal/utils";
import { DriveFile } from "./drivefile";
import { Form } from "./form";
import { Link } from "./link";
import { YouTubeVideo } from "./youtubevideo";
/**
 * A material attached to a course as part of a material set.
 */
export declare class CourseMaterial extends SpeakeasyBase {
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
