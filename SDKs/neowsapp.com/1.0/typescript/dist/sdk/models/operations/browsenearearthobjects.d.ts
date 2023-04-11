import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BrowseNearEarthObjectsRequest extends SpeakeasyBase {
    /**
     * page
     */
    page?: number;
    /**
     * size
     */
    size?: number;
}
export declare class BrowseNearEarthObjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    nearEarthObject?: shared.NearEarthObject;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
