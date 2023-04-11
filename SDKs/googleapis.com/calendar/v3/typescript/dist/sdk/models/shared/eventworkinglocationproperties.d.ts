import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If present, specifies that the user is working from a custom location.
 */
export declare class EventWorkingLocationPropertiesCustomLocation extends SpeakeasyBase {
    /**
     * An optional extra label for additional information.
     */
    label?: string;
}
/**
 * If present, specifies that the user is working from an office.
 */
export declare class EventWorkingLocationPropertiesOfficeLocation extends SpeakeasyBase {
    /**
     * An optional building identifier. This should reference a building ID in the organization's Resources database.
     */
    buildingId?: string;
    /**
     * An optional arbitrary desk identifier.
     */
    deskId?: string;
    /**
     * An optional arbitrary floor identifier.
     */
    floorId?: string;
    /**
     * An optional arbitrary floor section identifier.
     */
    floorSectionId?: string;
    /**
     * An optional extra label for additional information.
     */
    label?: string;
}
export declare class EventWorkingLocationProperties extends SpeakeasyBase {
    /**
     * If present, specifies that the user is working from a custom location.
     */
    customLocation?: EventWorkingLocationPropertiesCustomLocation;
    /**
     * If present, specifies that the user is working at home.
     */
    homeOffice?: any;
    /**
     * If present, specifies that the user is working from an office.
     */
    officeLocation?: EventWorkingLocationPropertiesOfficeLocation;
}
