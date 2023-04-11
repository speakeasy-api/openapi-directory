import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetProfileImageFileRequest extends SpeakeasyBase {
    /**
     * A default image URL to use when the user has no profile image. Or to use one of the Gravatar default images, you can set default to any one of (404, mm, identicon, monsterid, wavatar, retro, blank). <br /><br /> To learn how the Gravatar default images options work, see the Default Image section on the page at:<br /> https://en.gravatar.com/site/implement/images/
     *
     * @remarks
     *
     */
    default?: string;
    /**
     * The user ID of the user to return the profile image of.
     */
    userId: string;
}
export declare class GetProfileImageFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
