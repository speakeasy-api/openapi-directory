import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The photo type.
 */
export declare enum LandlordPhotoModelPhotoTypeEnum {
    Photo = "Photo",
    Map = "Map",
    FloorPlan = "FloorPlan",
    SiteMap = "SiteMap",
    AerialPhoto = "AerialPhoto"
}
/**
 * Stores a photo related to a property structure.
 */
export declare class LandlordPhotoModel extends SpeakeasyBase {
    /**
     * A unique identifier defining the object and change revision.
     */
    eTag?: string;
    /**
     * The file name.
     */
    fileName?: string;
    /**
     * The unique Object ID (OID).
     */
    oid?: string;
    /**
     * The photo type.
     */
    photoType?: LandlordPhotoModelPhotoTypeEnum;
}
