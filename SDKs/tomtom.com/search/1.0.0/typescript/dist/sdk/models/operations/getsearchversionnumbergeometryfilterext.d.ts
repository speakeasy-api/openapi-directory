import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchVersionNumberGeometryFilterExtRequest extends SpeakeasyBase {
    /**
     * Expected response format.
     */
    ext: shared.ExtEnum;
    /**
     * List of geometries to filter by. Available types are CIRCLE (with the radius expressed in meters) and POLYGON.
     */
    geometryList: string;
    /**
     * List of POIs to filter. The only required attribute of a POI is position, everything else is optional and will be echoed back when passed in.
     */
    poiList: string;
    /**
     * Service version number. The current value is 2.
     */
    versionNumber: shared.VersionNumberEnum;
}
export declare class GetSearchVersionNumberGeometryFilterExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
