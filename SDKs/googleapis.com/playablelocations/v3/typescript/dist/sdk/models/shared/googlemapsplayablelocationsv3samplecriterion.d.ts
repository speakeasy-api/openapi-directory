import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsPlayablelocationsV3SampleFilter } from "./googlemapsplayablelocationsv3samplefilter";
/**
 * Encapsulates a filter criterion for searching for a set of playable locations.
 */
export declare class GoogleMapsPlayablelocationsV3SampleCriterion extends SpeakeasyBase {
    /**
     * Specifies which `PlayableLocation` fields are returned. `name` (which is used for logging impressions), `center_point` and `place_id` (or `plus_code`) are always returned. The following fields are omitted unless you specify them here: * snapped_point * types Note: The more fields you include, the more expensive in terms of data and associated latency your query will be.
     */
    fieldsToReturn?: string;
    /**
     * Specifies the filters to use when searching for playable locations.
     */
    filter?: GoogleMapsPlayablelocationsV3SampleFilter;
    /**
     * Required. An arbitrary, developer-defined identifier of the type of game object that the playable location is used for. This field allows you to specify criteria per game object type when searching for playable locations. You should assign a unique `game_object_type` ID across all `request_criteria` to represent a distinct type of game object. For example, 1=monster location, 2=powerup location. The response contains a map.
     */
    gameObjectType?: number;
}
