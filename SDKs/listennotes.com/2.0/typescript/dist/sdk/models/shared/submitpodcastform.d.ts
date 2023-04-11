import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubmitPodcastForm extends SpeakeasyBase {
    /**
     * A valid email address. If **email** is specified, then we'll notify this email address once the podcast is accepted.
     */
    email?: string;
    /**
     * A valid podcast rss url.
     */
    rss: string;
}
