import { SpeakeasyBase } from "../../../internal/utils";
import { DeveloperMetadataLocation } from "./developermetadatalocation";
/**
 * Determines how this lookup matches the location. If this field is specified as EXACT, only developer metadata associated on the exact location specified is matched. If this field is specified to INTERSECTING, developer metadata associated on intersecting locations is also matched. If left unspecified, this field assumes a default value of INTERSECTING. If this field is specified, a metadataLocation must also be specified.
 */
export declare enum DeveloperMetadataLookupLocationMatchingStrategyEnum {
    DeveloperMetadataLocationMatchingStrategyUnspecified = "DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED",
    ExactLocation = "EXACT_LOCATION",
    IntersectingLocation = "INTERSECTING_LOCATION"
}
/**
 * Limits the selected developer metadata to those entries which are associated with locations of the specified type. For example, when this field is specified as ROW this lookup only considers developer metadata associated on rows. If the field is left unspecified, all location types are considered. This field cannot be specified as SPREADSHEET when the locationMatchingStrategy is specified as INTERSECTING or when the metadataLocation is specified as a non-spreadsheet location: spreadsheet metadata cannot intersect any other developer metadata location. This field also must be left unspecified when the locationMatchingStrategy is specified as EXACT.
 */
export declare enum DeveloperMetadataLookupLocationTypeEnum {
    DeveloperMetadataLocationTypeUnspecified = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED",
    Row = "ROW",
    Column = "COLUMN",
    Sheet = "SHEET",
    Spreadsheet = "SPREADSHEET"
}
/**
 * Limits the selected developer metadata to that which has a matching DeveloperMetadata.visibility. If left unspecified, all developer metadata visibile to the requesting project is considered.
 */
export declare enum DeveloperMetadataLookupVisibilityEnum {
    DeveloperMetadataVisibilityUnspecified = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED",
    Document = "DOCUMENT",
    Project = "PROJECT"
}
/**
 * Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified.
 */
export declare class DeveloperMetadataLookup extends SpeakeasyBase {
    /**
     * Determines how this lookup matches the location. If this field is specified as EXACT, only developer metadata associated on the exact location specified is matched. If this field is specified to INTERSECTING, developer metadata associated on intersecting locations is also matched. If left unspecified, this field assumes a default value of INTERSECTING. If this field is specified, a metadataLocation must also be specified.
     */
    locationMatchingStrategy?: DeveloperMetadataLookupLocationMatchingStrategyEnum;
    /**
     * Limits the selected developer metadata to those entries which are associated with locations of the specified type. For example, when this field is specified as ROW this lookup only considers developer metadata associated on rows. If the field is left unspecified, all location types are considered. This field cannot be specified as SPREADSHEET when the locationMatchingStrategy is specified as INTERSECTING or when the metadataLocation is specified as a non-spreadsheet location: spreadsheet metadata cannot intersect any other developer metadata location. This field also must be left unspecified when the locationMatchingStrategy is specified as EXACT.
     */
    locationType?: DeveloperMetadataLookupLocationTypeEnum;
    /**
     * Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_id.
     */
    metadataId?: number;
    /**
     * Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_key.
     */
    metadataKey?: string;
    /**
     * A location where metadata may be associated in a spreadsheet.
     */
    metadataLocation?: DeveloperMetadataLocation;
    /**
     * Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_value.
     */
    metadataValue?: string;
    /**
     * Limits the selected developer metadata to that which has a matching DeveloperMetadata.visibility. If left unspecified, all developer metadata visibile to the requesting project is considered.
     */
    visibility?: DeveloperMetadataLookupVisibilityEnum;
}
