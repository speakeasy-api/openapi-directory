import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayValue } from "./arrayvalue";
import { Entity } from "./entity";
import { Key } from "./key";
import { LatLng } from "./latlng";
/**
 * A null value.
 */
export declare enum ValueNullValueEnum {
    NullValue = "NULL_VALUE"
}
/**
 * A message that can hold any of the supported value types and associated metadata.
 */
export declare class Value extends SpeakeasyBase {
    /**
     * An array value.
     */
    arrayValue?: ArrayValue;
    /**
     * A blob value. May have at most 1,000,000 bytes. When `exclude_from_indexes` is false, may have at most 1500 bytes. In JSON requests, must be base64-encoded.
     */
    blobValue?: string;
    /**
     * A boolean value.
     */
    booleanValue?: boolean;
    /**
     * A double value.
     */
    doubleValue?: number;
    /**
     * A Datastore data object. An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.
     */
    entityValue?: Entity;
    /**
     * If the value should be excluded from all indexes including those defined explicitly.
     */
    excludeFromIndexes?: boolean;
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    geoPointValue?: LatLng;
    /**
     * An integer value.
     */
    integerValue?: string;
    /**
     * A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
     */
    keyValue?: Key;
    /**
     * The `meaning` field should only be populated for backwards compatibility.
     */
    meaning?: number;
    /**
     * A null value.
     */
    nullValue?: ValueNullValueEnum;
    /**
     * A UTF-8 encoded string value. When `exclude_from_indexes` is false (it is indexed) , may have at most 1500 bytes. Otherwise, may be set to at most 1,000,000 bytes.
     */
    stringValue?: string;
    /**
     * A timestamp value. When stored in the Datastore, precise only to microseconds; any additional precision is rounded down.
     */
    timestampValue?: string;
}
