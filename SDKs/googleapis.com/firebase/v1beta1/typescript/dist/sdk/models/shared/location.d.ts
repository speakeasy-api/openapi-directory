import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LocationFeaturesEnum {
    LocationFeatureUnspecified = "LOCATION_FEATURE_UNSPECIFIED",
    Firestore = "FIRESTORE",
    DefaultStorage = "DEFAULT_STORAGE",
    Functions = "FUNCTIONS"
}
/**
 * Indicates whether the GCP resource location is a [regional or multi-regional location](https://firebase.google.com/docs/projects/locations#types) for data replication.
 */
export declare enum LocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED",
    Regional = "REGIONAL",
    MultiRegional = "MULTI_REGIONAL"
}
/**
 * A GCP resource location that can be selected for a FirebaseProject.
 */
export declare class Location extends SpeakeasyBase {
    /**
     * Products and services that are available in the GCP resource location.
     */
    features?: LocationFeaturesEnum[];
    /**
     * The ID of the GCP resource location. It will be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations#types).
     */
    locationId?: string;
    /**
     * Indicates whether the GCP resource location is a [regional or multi-regional location](https://firebase.google.com/docs/projects/locations#types) for data replication.
     */
    type?: LocationTypeEnum;
}
