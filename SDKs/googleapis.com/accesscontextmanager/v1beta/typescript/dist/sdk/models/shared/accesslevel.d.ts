import { SpeakeasyBase } from "../../../internal/utils";
import { BasicLevel } from "./basiclevel";
import { CustomLevel } from "./customlevel";
/**
 * An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
 */
export declare class AccessLevel extends SpeakeasyBase {
    /**
     * `BasicLevel` is an `AccessLevel` using a set of recommended features.
     */
    basic?: BasicLevel;
    /**
     * `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec
     */
    custom?: CustomLevel;
    /**
     * Description of the `AccessLevel` and its use. Does not affect behavior.
     */
    description?: string;
    /**
     * Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`.
     */
    name?: string;
    /**
     * Human readable title. Must be unique within the Policy.
     */
    title?: string;
}
