package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaLifecycleInput
 * The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
**/
public class GoogleAppsDriveLabelsV2betaLifecycleInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledPolicy")
    public GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy disabledPolicy;
    public GoogleAppsDriveLabelsV2betaLifecycleInput withDisabledPolicy(GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy disabledPolicy) {
        this.disabledPolicy = disabledPolicy;
        return this;
    }
}