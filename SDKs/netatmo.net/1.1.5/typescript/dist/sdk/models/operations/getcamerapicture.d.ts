import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetcamerapictureSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class GetcamerapictureRequest extends SpeakeasyBase {
    /**
     * id of the image (can be retrieved as 'id' in 'face' in Gethomedata, or as 'id' in 'snapshot' in Getnextevents, Getlasteventof and Geteventsuntil)
     */
    imageId: string;
    /**
     * Security key to access snapshots.
     */
    key: string;
}
export declare class GetcamerapictureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    getcamerapicture200ApplicationJSONByteString?: string;
}
