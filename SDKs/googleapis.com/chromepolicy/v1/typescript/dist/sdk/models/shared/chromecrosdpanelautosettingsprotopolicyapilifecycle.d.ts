import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
/**
 * Indicate current life cycle stage of the policy API.
 */
export declare enum ChromeCrosDpanelAutosettingsProtoPolicyApiLifecyclePolicyApiLifecycleStageEnum {
    ApiUnspecified = "API_UNSPECIFIED",
    ApiPreview = "API_PREVIEW",
    ApiDevelopment = "API_DEVELOPMENT",
    ApiCurrent = "API_CURRENT",
    ApiDeprecated = "API_DEPRECATED"
}
export declare class ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle extends SpeakeasyBase {
    /**
     * In the event that this policy was deprecated in favor of another policy, the fully qualified namespace(s) of the new policies as they will show in PolicyAPI.
     */
    deprecatedInFavorOf?: string[];
    /**
     * Description about current life cycle.
     */
    description?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    endSupport?: GoogleTypeDate;
    /**
     * Indicate current life cycle stage of the policy API.
     */
    policyApiLifecycleStage?: ChromeCrosDpanelAutosettingsProtoPolicyApiLifecyclePolicyApiLifecycleStageEnum;
}
