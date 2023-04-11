import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Immutable. The location type of the resources that are allowed to be attached to the assets within this zone.
 */
export declare enum GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED",
    SingleRegion = "SINGLE_REGION",
    MultiRegion = "MULTI_REGION"
}
/**
 * Settings for resources attached as assets within a zone.
 */
export declare class GoogleCloudDataplexV1ZoneResourceSpec extends SpeakeasyBase {
    /**
     * Required. Immutable. The location type of the resources that are allowed to be attached to the assets within this zone.
     */
    locationType?: GoogleCloudDataplexV1ZoneResourceSpecLocationTypeEnum;
}
