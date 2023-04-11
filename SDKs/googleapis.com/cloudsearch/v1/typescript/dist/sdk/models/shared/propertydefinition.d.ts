import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanPropertyOptions } from "./booleanpropertyoptions";
import { DatePropertyOptions } from "./datepropertyoptions";
import { DoublePropertyOptions } from "./doublepropertyoptions";
import { EnumPropertyOptions } from "./enumpropertyoptions";
import { HtmlPropertyOptions } from "./htmlpropertyoptions";
import { IntegerPropertyOptions } from "./integerpropertyoptions";
import { ObjectPropertyOptions } from "./objectpropertyoptions";
import { PropertyDisplayOptions } from "./propertydisplayoptions";
import { TextPropertyOptions } from "./textpropertyoptions";
import { TimestampPropertyOptions } from "./timestamppropertyoptions";
/**
 * The definition of a property within an object.
 */
export declare class PropertyDefinition extends SpeakeasyBase {
    /**
     * The options for boolean properties.
     */
    booleanPropertyOptions?: BooleanPropertyOptions;
    /**
     * The options for date properties.
     */
    datePropertyOptions?: DatePropertyOptions;
    /**
     * The display options for a property.
     */
    displayOptions?: PropertyDisplayOptions;
    /**
     * The options for double properties.
     */
    doublePropertyOptions?: DoublePropertyOptions;
    /**
     * The options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*.
     */
    enumPropertyOptions?: EnumPropertyOptions;
    /**
     * The options for html properties.
     */
    htmlPropertyOptions?: HtmlPropertyOptions;
    /**
     * The options for integer properties.
     */
    integerPropertyOptions?: IntegerPropertyOptions;
    /**
     * Indicates that the property can be used for generating facets. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, enum, integer, and text properties.
     */
    isFacetable?: boolean;
    /**
     * Indicates that multiple values are allowed for the property. For example, a document only has one description but can have multiple comments. Cannot be true for properties whose type is a boolean. If set to false, properties that contain more than one value cause the indexing request for that item to be rejected.
     */
    isRepeatable?: boolean;
    /**
     * Indicates that the property identifies data that should be returned in search results via the Query API. If set to *true*, indicates that Query API users can use matching property fields in results. However, storing fields requires more space allocation and uses more bandwidth for search queries, which impacts performance over large datasets. Set to *true* here only if the field is needed for search results. Cannot be true for properties whose type is an object.
     */
    isReturnable?: boolean;
    /**
     * Indicates that the property can be used for sorting. Cannot be true for properties that are repeatable. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, date, double, integer, and timestamp properties.
     */
    isSortable?: boolean;
    /**
     * Indicates that the property can be used for generating query suggestions.
     */
    isSuggestable?: boolean;
    /**
     * Indicates that users can perform wildcard search for this property. Only supported for Text properties. IsReturnable must be true to set this option. In a given datasource maximum of 5 properties can be marked as is_wildcard_searchable. For more details, see [Define object properties](https://developers.google.com/cloud-search/docs/guides/schema-guide#properties)
     */
    isWildcardSearchable?: boolean;
    /**
     * The name of the property. Item indexing requests sent to the Indexing API should set the property name equal to this value. For example, if name is *subject_line*, then indexing requests for document items with subject fields should set the name for that field equal to *subject_line*. Use the name as the identifier for the object property. Once registered as a property for an object, you cannot re-use this name for another property within that object. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters.
     */
    name?: string;
    /**
     * The options for object properties.
     */
    objectPropertyOptions?: ObjectPropertyOptions;
    /**
     * The options for text properties.
     */
    textPropertyOptions?: TextPropertyOptions;
    /**
     * The options for timestamp properties.
     */
    timestampPropertyOptions?: TimestampPropertyOptions;
}
