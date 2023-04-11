import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's location.
 */
export declare class Location extends SpeakeasyBase {
    /**
     * The building identifier.
     */
    buildingId?: string;
    /**
     * Whether the location is the current location.
     */
    current?: boolean;
    /**
     * The individual desk location.
     */
    deskCode?: string;
    /**
     * The floor name or number.
     */
    floor?: string;
    /**
     * The floor section in `floor_name`.
     */
    floorSection?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The type of the location. The type can be custom or one of these predefined values: * `desk` * `grewUp`
     */
    type?: string;
    /**
     * The free-form value of the location.
     */
    value?: string;
}
/**
 * A person's location.
 */
export declare class LocationInput extends SpeakeasyBase {
    /**
     * The building identifier.
     */
    buildingId?: string;
    /**
     * Whether the location is the current location.
     */
    current?: boolean;
    /**
     * The individual desk location.
     */
    deskCode?: string;
    /**
     * The floor name or number.
     */
    floor?: string;
    /**
     * The floor section in `floor_name`.
     */
    floorSection?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The type of the location. The type can be custom or one of these predefined values: * `desk` * `grewUp`
     */
    type?: string;
    /**
     * The free-form value of the location.
     */
    value?: string;
}
