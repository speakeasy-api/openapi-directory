import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetProfileImages200ApplicationJSON extends SpeakeasyBase {
    /**
     * An image URL.
     */
    image?: string;
    /**
     * The source of the image.  Currently one of: gravatar, facebook, google <br /><br /> NOTE: Additional sources may be added in the future (eg. 'trashnothing' when support for uploading custom profile images is added) so clients should take care to support arbitrary sources being returned.
     *
     * @remarks
     *
     */
    source?: string;
}
export declare class GetProfileImagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The  users profile images.
     */
    getProfileImages200ApplicationJSONObjects?: GetProfileImages200ApplicationJSON[];
}
