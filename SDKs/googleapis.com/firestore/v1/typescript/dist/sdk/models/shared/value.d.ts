import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayValue } from "./arrayvalue";
import { LatLng } from "./latlng";
import { MapValue } from "./mapvalue";
/**
 * A null value.
 */
export declare enum ValueNullValueEnum {
    NullValue = "NULL_VALUE"
}
/**
 * A message that can hold any of the supported value types.
 */
export declare class Value extends SpeakeasyBase {
    /**
     * An array value.
     */
    arrayValue?: ArrayValue;
    /**
     * A boolean value.
     */
    booleanValue?: boolean;
    /**
     * A bytes value. Must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes are considered by queries.
     */
    bytesValue?: string;
    /**
     * A double value.
     */
    doubleValue?: number;
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    geoPointValue?: LatLng;
    /**
     * An integer value.
     */
    integerValue?: string;
    /**
     * A map value.
     */
    mapValue?: MapValue;
    /**
     * A null value.
     */
    nullValue?: ValueNullValueEnum;
    /**
     * A reference to a document. For example: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    referenceValue?: string;
    /**
     * A string value. The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes of the UTF-8 representation are considered by queries.
     */
    stringValue?: string;
    /**
     * A timestamp value. Precise only to microseconds. When stored, any additional precision is rounded down.
     */
    timestampValue?: string;
}
