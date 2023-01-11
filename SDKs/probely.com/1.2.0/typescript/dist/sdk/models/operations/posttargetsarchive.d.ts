import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostTargetsArchive400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsArchive401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsArchive403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsArchiveRequest extends SpeakeasyBase {
    request: string[];
}
export declare class PostTargetsArchiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postTargetsArchive400ApplicationJSONObject?: PostTargetsArchive400ApplicationJson;
    postTargetsArchive401ApplicationJSONObject?: PostTargetsArchive401ApplicationJson;
    postTargetsArchive403ApplicationJSONObject?: PostTargetsArchive403ApplicationJson;
    targetIds?: string[];
}
