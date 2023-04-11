import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopPointGetByGeoPointRequest extends SpeakeasyBase {
    /**
     * an optional list of comma separated property categories to return in the StopPoint's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /StopPoint/Meta/categories endpoint)
     */
    categories?: string[];
    locationLat: number;
    locationLon: number;
    /**
     * the list of modes to search (comma separated mode names e.g. tube,dlr)
     */
    modes?: string[];
    /**
     * the radius of the bounding circle in metres (default : 200)
     */
    radius?: number;
    /**
     * true to return the lines that each stop point serves as a nested resource
     */
    returnLines?: boolean;
    /**
     * a list of stopTypes that should be returned (a list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint)
     */
    stopTypes: string[];
    /**
     * Re-arrange the output into a parent/child hierarchy
     */
    useStopPointHierarchy?: boolean;
}
export declare class StopPointGetByGeoPointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesStopPointsResponse?: shared.TflApiPresentationEntitiesStopPointsResponse;
}
