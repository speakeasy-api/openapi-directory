import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Matches events based on exact matches on the CloudEvents attributes.
 */
export declare class MatchingCriteria extends SpeakeasyBase {
    /**
     * Required. The name of a CloudEvents attribute. Currently, only a subset of attributes can be specified. All triggers MUST provide a matching criteria for the 'type' attribute.
     */
    attribute?: string;
    /**
     * Required. The value for the attribute.
     */
    value?: string;
}
