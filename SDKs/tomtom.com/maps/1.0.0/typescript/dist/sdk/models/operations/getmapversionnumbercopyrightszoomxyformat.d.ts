import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp",
    Xml = "xml"
}
export declare class GetMapVersionNumberCopyrightsZoomXyFormatPathParams extends SpeakeasyBase {
    x: number;
    y: number;
    format: GetMapVersionNumberCopyrightsZoomXyFormatFormatEnum;
    versionNumber: number;
    zoom: number;
}
export declare class GetMapVersionNumberCopyrightsZoomXyFormatQueryParams extends SpeakeasyBase {
    callback?: string;
}
export declare class GetMapVersionNumberCopyrightsZoomXyFormatRequest extends SpeakeasyBase {
    pathParams: GetMapVersionNumberCopyrightsZoomXyFormatPathParams;
    queryParams: GetMapVersionNumberCopyrightsZoomXyFormatQueryParams;
}
export declare class GetMapVersionNumberCopyrightsZoomXyFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
