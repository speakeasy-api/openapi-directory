import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The category of the artifact.
 */
export declare enum GoogleAdsSearchads360V0ResourcesSearchAds360FieldCategoryEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Resource = "RESOURCE",
    Attribute = "ATTRIBUTE",
    Segment = "SEGMENT",
    Metric = "METRIC"
}
/**
 * Output only. This field determines the operators that can be used with the artifact in WHERE clauses.
 */
export declare enum GoogleAdsSearchads360V0ResourcesSearchAds360FieldDataTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Boolean = "BOOLEAN",
    Date = "DATE",
    Double = "DOUBLE",
    Enum = "ENUM",
    Float = "FLOAT",
    Int32 = "INT32",
    Int64 = "INT64",
    Message = "MESSAGE",
    ResourceName = "RESOURCE_NAME",
    String = "STRING",
    Uint64 = "UINT64"
}
/**
 * A field or resource (artifact) used by SearchAds360Service.
 */
export declare class GoogleAdsSearchads360V0ResourcesSearchAds360Field extends SpeakeasyBase {
    /**
     * Output only. The names of all resources that are selectable with the described artifact. Fields from these resources do not segment metrics when included in search queries. This field is only set for artifacts whose category is RESOURCE.
     */
    attributeResources?: string[];
    /**
     * Output only. The category of the artifact.
     */
    category?: GoogleAdsSearchads360V0ResourcesSearchAds360FieldCategoryEnum;
    /**
     * Output only. This field determines the operators that can be used with the artifact in WHERE clauses.
     */
    dataType?: GoogleAdsSearchads360V0ResourcesSearchAds360FieldDataTypeEnum;
    /**
     * Output only. Values the artifact can assume if it is a field of type ENUM. This field is only set for artifacts of category SEGMENT or ATTRIBUTE.
     */
    enumValues?: string[];
    /**
     * Output only. Whether the artifact can be used in a WHERE clause in search queries.
     */
    filterable?: boolean;
    /**
     * Output only. Whether the field artifact is repeated.
     */
    isRepeated?: boolean;
    /**
     * Output only. This field lists the names of all metrics that are selectable with the described artifact when it is used in the FROM clause. It is only set for artifacts whose category is RESOURCE.
     */
    metrics?: string[];
    /**
     * Output only. The name of the artifact.
     */
    name?: string;
    /**
     * Output only. The resource name of the artifact. Artifact resource names have the form: `SearchAds360Fields/{name}`
     */
    resourceName?: string;
    /**
     * Output only. This field lists the names of all artifacts, whether a segment or another resource, that segment metrics when included in search queries and when the described artifact is used in the FROM clause. It is only set for artifacts whose category is RESOURCE.
     */
    segments?: string[];
    /**
     * Output only. Whether the artifact can be used in a SELECT clause in search queries.
     */
    selectable?: boolean;
    /**
     * Output only. The names of all resources, segments, and metrics that are selectable with the described artifact.
     */
    selectableWith?: string[];
    /**
     * Output only. Whether the artifact can be used in a ORDER BY clause in search queries.
     */
    sortable?: boolean;
    /**
     * Output only. The URL of proto describing the artifact's data type.
     */
    typeUrl?: string;
}
