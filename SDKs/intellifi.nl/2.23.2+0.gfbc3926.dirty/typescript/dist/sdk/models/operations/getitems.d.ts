import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetItemsRequest extends SpeakeasyBase {
    /**
     * Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.
     */
    after?: Date;
    /**
     * Limits directly on `code_hex`. Marks the start of a range, optionally use `before_code` to set the end. Result output excludes the given `code_hex` value.
     */
    afterCode?: string;
    /**
     * Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.
     */
    afterId?: string;
    /**
     * Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.
     */
    before?: string;
    /**
     * Limits directly on `code_hex`. Marks the end of a range, optionally use `after_code` to set the start. Result output excludes the given `code_hex` value.
     */
    beforeCode?: string;
    /**
     * Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.
     */
    beforeId?: string;
    /**
     * Filter based on the hexadecimal string representation of the item. Supports wildcards: `*`.
     */
    codeHex?: string;
    /**
     * Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.
     */
    from?: string;
    /**
     * Limits on `code_hex`. Marks the start of a range, optionally use `until_code` to set the end. Result output includes the given `code_hex` value.
     */
    fromCode?: string;
    /**
     * Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.
     */
    fromId?: string;
    /**
     * Unique identifier
     */
    id?: string;
    /**
     * Removes `url` fields from output and shows `_id` instead of `_url` in references.
     */
    idOnly?: boolean;
    /**
     * Only show items which are present of not.
     */
    isPresent?: boolean;
    /**
     * Filter based on the label value. Supports wildcards: `*`
     */
    label?: string;
    /**
     * Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
     */
    limit?: number;
    /**
     * Filter based on the location
     */
    location?: string;
    /**
     * Filter based on metadata. Does a partial match on any value in the metadata object. It is also possible to do an exact/wildcard match on specific properties, e.g. `metadata.foo=bar`
     */
    metadata?: string;
    /**
     * Filter based on move count
     */
    moveCount?: number;
    /**
     * Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
     */
    populate?: string;
    /**
     * Filter based on the detected protocol of an item.
     */
    protocol?: shared.ItemProtocolEnum;
    /**
     * Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
     */
    resultsOnly?: boolean;
    /**
     * Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.
     */
    select?: string;
    /**
     * Filter based on the set the resource is in.
     */
    sets?: string;
    /**
     * Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
     */
    sort?: string;
    /**
     * Filter based on the detected technology of an item.
     */
    technology?: shared.TechnologyEnum;
    /**
     * Filter based on a full text search. Searched properties depend on the resource type. Matches on any of the given words. Supports quote (exact words) and minus (exclude) operators.
     */
    text?: string;
    /**
     * Filter on the time the resource was created.
     */
    timeCreated?: string;
    /**
     * Filter based on the time last present
     */
    timeLastPresent?: string;
    /**
     * Filter based on time last moved
     */
    timeMoved?: string;
    /**
     * Filter on the time the resource was last updated
     */
    timeUpdated?: string;
    /**
     * Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
     */
    timeoutS?: number;
    /**
     * Filter based on the type of an item.
     */
    type?: shared.ItemTypeEnum;
    /**
     * Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.
     */
    until?: string;
    /**
     * Limits on `code_hex`. Marks the end of a range, optionally use `from_code` to set the start. Result output includes the given `code_hex` value.
     */
    untilCode?: string;
    /**
     * Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.
     */
    untilId?: string;
}
export declare class GetItems200ApplicationJSONResults3 extends SpeakeasyBase {
    /**
     * String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.
     */
    codeHex?: string;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * Last known geolocation estimate of this object. Not guaranteed to be included in response.
     */
    geoCoords?: shared.GeoCoordsReadOnly;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Is this item actively detected in one of the zones at this moment? True when it is, false if it's not.
     */
    isPresent?: boolean;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    /**
     * Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.
     */
    locationRequest?: string;
    /**
     * Url to the individual resource.
     */
    locationUrl?: string;
    /**
     * Object of searchable metadata for this resource. Can be freely used to store metadata properties.
     */
    metadata?: Record<string, any>;
    /**
     * How many times this item moved since it's created on this server. Note that it is likely that not all moved events are available in the events (they are deleted after a configurable number of time). This field is never decreases. It gives a good indication of the usage of this item.
     */
    moveCount?: number;
    /**
     * Type of protocol that was used to decode this item.
     */
    protocol?: shared.ItemProtocolEnum;
    /**
     * List of set ids
     */
    sets?: string[];
    /**
     * Type of technology that was used to detect this item.
     */
    technology?: shared.TechnologyEnum;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * Last time the item was present.
     */
    timeLastPresent?: string;
    /**
     * Last time this item moved. This is the last time that the location for this item was changed.
     */
    timeMoved?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Type of item.
     */
    type?: shared.ItemTypeEnum;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
export declare class GetItems200ApplicationJSONResults2 extends SpeakeasyBase {
    /**
     * String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.
     */
    codeHex?: string;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * Last known geolocation estimate of this object. Not guaranteed to be included in response.
     */
    geoCoords?: shared.GeoCoordsReadOnly;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Is this item actively detected in one of the zones at this moment? True when it is, false if it's not.
     */
    isPresent?: boolean;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    /**
     * Unique identifier for resource.
     */
    locationId?: string;
    /**
     * Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.
     */
    locationRequest?: string;
    /**
     * Object of searchable metadata for this resource. Can be freely used to store metadata properties.
     */
    metadata?: Record<string, any>;
    /**
     * How many times this item moved since it's created on this server. Note that it is likely that not all moved events are available in the events (they are deleted after a configurable number of time). This field is never decreases. It gives a good indication of the usage of this item.
     */
    moveCount?: number;
    /**
     * Type of protocol that was used to decode this item.
     */
    protocol?: shared.ItemProtocolEnum;
    /**
     * List of set ids
     */
    sets?: string[];
    /**
     * Type of technology that was used to detect this item.
     */
    technology?: shared.TechnologyEnum;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * Last time the item was present.
     */
    timeLastPresent?: string;
    /**
     * Last time this item moved. This is the last time that the location for this item was changed.
     */
    timeMoved?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Type of item.
     */
    type?: shared.ItemTypeEnum;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
export declare class GetItems200ApplicationJSONResults1 extends SpeakeasyBase {
    /**
     * String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.
     */
    codeHex?: string;
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    configRequest?: Record<string, any>;
    /**
     * The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...
     */
    custom?: any;
    /**
     * Last known geolocation estimate of this object. Not guaranteed to be included in response.
     */
    geoCoords?: shared.GeoCoordsReadOnly;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Is this item actively detected in one of the zones at this moment? True when it is, false if it's not.
     */
    isPresent?: boolean;
    /**
     * A name or a label for this resource. This is used in the user interface, may be empty.
     */
    label?: string;
    location?: shared.Location;
    /**
     * Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.
     */
    locationRequest?: string;
    /**
     * Object of searchable metadata for this resource. Can be freely used to store metadata properties.
     */
    metadata?: Record<string, any>;
    /**
     * How many times this item moved since it's created on this server. Note that it is likely that not all moved events are available in the events (they are deleted after a configurable number of time). This field is never decreases. It gives a good indication of the usage of this item.
     */
    moveCount?: number;
    /**
     * Type of protocol that was used to decode this item.
     */
    protocol?: shared.ItemProtocolEnum;
    /**
     * List of set ids
     */
    sets?: string[];
    /**
     * Type of technology that was used to detect this item.
     */
    technology?: shared.TechnologyEnum;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * Last time the item was present.
     */
    timeLastPresent?: string;
    /**
     * Last time this item moved. This is the last time that the location for this item was changed.
     */
    timeMoved?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
    /**
     * Type of item.
     */
    type?: shared.ItemTypeEnum;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
/**
 * A JSON object containing a list of items
 */
export declare class GetItems200ApplicationJSON extends SpeakeasyBase {
    /**
     * The maximum number of items in the response (as set in the query or by default).
     */
    count?: number;
    /**
     * The maximum number of items available to return.
     */
    countCurrent?: number;
    /**
     * Becomes false when the number of results is smaller than limit.
     */
    isLimited?: boolean;
    /**
     * URL to the next page of items. ( null if none)
     */
    nextUrl?: string;
    /**
     * Amount of time, in milliseconds, the request needed to complete.
     */
    queryDurationMs?: number;
    results?: any[];
    /**
     * Url to the individual resource.
     */
    url?: string;
}
export declare class GetItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A JSON object containing a list of items
     */
    getItems200ApplicationJSONObject?: GetItems200ApplicationJSON;
}
