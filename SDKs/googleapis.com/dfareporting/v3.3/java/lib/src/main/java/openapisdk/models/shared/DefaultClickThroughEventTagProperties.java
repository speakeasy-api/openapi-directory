package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DefaultClickThroughEventTagProperties
 * Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further.
**/
public class DefaultClickThroughEventTagProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultClickThroughEventTagId")
    public String defaultClickThroughEventTagId;
    public DefaultClickThroughEventTagProperties withDefaultClickThroughEventTagId(String defaultClickThroughEventTagId) {
        this.defaultClickThroughEventTagId = defaultClickThroughEventTagId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideInheritedEventTag")
    public Boolean overrideInheritedEventTag;
    public DefaultClickThroughEventTagProperties withOverrideInheritedEventTag(Boolean overrideInheritedEventTag) {
        this.overrideInheritedEventTag = overrideInheritedEventTag;
        return this;
    }
}