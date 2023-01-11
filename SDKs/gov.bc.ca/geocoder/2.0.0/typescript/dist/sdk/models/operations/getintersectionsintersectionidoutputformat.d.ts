import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetIntersectionsIntersectionIdOutputFormatPathParams extends SpeakeasyBase {
    intersectionID: string;
    outputFormat: GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum;
}
export declare class GetIntersectionsIntersectionIdOutputFormatQueryParams extends SpeakeasyBase {
    outputSRS?: number;
}
export declare class GetIntersectionsIntersectionIdOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetIntersectionsIntersectionIdOutputFormatPathParams;
    queryParams: GetIntersectionsIntersectionIdOutputFormatQueryParams;
}
export declare class GetIntersectionsIntersectionIdOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
