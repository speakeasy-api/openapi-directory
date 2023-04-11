import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesMediaIdJsonRequest extends SpeakeasyBase {
    /**
     * The id of the record to look up
     */
    id: number;
}
export declare class GetResourcesMediaIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns the MediaItem identified by the 'id'.
     */
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
