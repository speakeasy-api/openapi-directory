import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetsArchived200ApplicationJson extends SpeakeasyBase {
    length?: number;
    page?: number;
    pageTotal?: number;
    paginationCount?: number;
    results?: shared.Target[];
}
export declare class PostTargetsArchived400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsArchived401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsArchived403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsArchivedRequest extends SpeakeasyBase {
    request: string[];
}
export declare class PostTargetsArchivedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postTargetsArchived200ApplicationJSONObject?: PostTargetsArchived200ApplicationJson;
    postTargetsArchived400ApplicationJSONObject?: PostTargetsArchived400ApplicationJson;
    postTargetsArchived401ApplicationJSONObject?: PostTargetsArchived401ApplicationJson;
    postTargetsArchived403ApplicationJSONObject?: PostTargetsArchived403ApplicationJson;
}
