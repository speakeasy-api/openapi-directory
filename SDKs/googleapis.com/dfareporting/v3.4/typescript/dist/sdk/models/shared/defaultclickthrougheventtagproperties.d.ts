import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further.
 */
export declare class DefaultClickThroughEventTagProperties extends SpeakeasyBase {
    /**
     * ID of the click-through event tag to apply to all ads in this entity's scope.
     */
    defaultClickThroughEventTagId?: string;
    /**
     * Whether this entity should override the inherited default click-through event tag with its own defined value.
     */
    overrideInheritedEventTag?: boolean;
}
