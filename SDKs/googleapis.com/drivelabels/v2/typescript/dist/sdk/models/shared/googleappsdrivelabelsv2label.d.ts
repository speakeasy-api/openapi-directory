import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2Field, GoogleAppsDriveLabelsV2FieldInput } from "./googleappsdrivelabelsv2field";
import { GoogleAppsDriveLabelsV2LabelAppliedCapabilities } from "./googleappsdrivelabelsv2labelappliedcapabilities";
import { GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy } from "./googleappsdrivelabelsv2labelappliedlabelpolicy";
import { GoogleAppsDriveLabelsV2LabelDisplayHints } from "./googleappsdrivelabelsv2labeldisplayhints";
import { GoogleAppsDriveLabelsV2LabelProperties } from "./googleappsdrivelabelsv2labelproperties";
import { GoogleAppsDriveLabelsV2LabelSchemaCapabilities } from "./googleappsdrivelabelsv2labelschemacapabilities";
import { GoogleAppsDriveLabelsV2Lifecycle, GoogleAppsDriveLabelsV2LifecycleInput } from "./googleappsdrivelabelsv2lifecycle";
import { GoogleAppsDriveLabelsV2LockStatus } from "./googleappsdrivelabelsv2lockstatus";
import { GoogleAppsDriveLabelsV2UserInfo } from "./googleappsdrivelabelsv2userinfo";
/**
 * Required. The type of label.
 */
export declare enum GoogleAppsDriveLabelsV2LabelLabelTypeEnum {
    LabelTypeUnspecified = "LABEL_TYPE_UNSPECIFIED",
    Shared = "SHARED",
    Admin = "ADMIN"
}
/**
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
 */
export declare class GoogleAppsDriveLabelsV2Label extends SpeakeasyBase {
    /**
     * The capabilities a user has on this label's applied metadata.
     */
    appliedCapabilities?: GoogleAppsDriveLabelsV2LabelAppliedCapabilities;
    /**
     * Behavior of this label when it's applied to Drive items.
     */
    appliedLabelPolicy?: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy;
    /**
     * Output only. The time this label was created.
     */
    createTime?: string;
    /**
     * Information about a user.
     */
    creator?: GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. The customer this label belongs to. For example: "customers/123abc789."
     */
    customer?: string;
    /**
     * Output only. The time this label was disabled. This value has no meaning when the label is not disabled.
     */
    disableTime?: string;
    /**
     * Information about a user.
     */
    disabler?: GoogleAppsDriveLabelsV2UserInfo;
    /**
     * UI display hints for rendering the label.
     */
    displayHints?: GoogleAppsDriveLabelsV2LabelDisplayHints;
    /**
     * List of fields in descending priority order.
     */
    fields?: GoogleAppsDriveLabelsV2Field[];
    /**
     * Output only. Globally unique identifier of this label. ID makes up part of the label `name`, but unlike `name`, ID is consistent between revisions. Matches the regex: `([a-zA-Z0-9])+`
     */
    id?: string;
    /**
     * Required. The type of label.
     */
    labelType?: GoogleAppsDriveLabelsV2LabelLabelTypeEnum;
    /**
     * Custom URL to present to users to allow them to learn more about this label and how it should be used.
     */
    learnMoreUri?: string;
    /**
     * The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
     */
    lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;
    /**
     * Contains information about whether a label component should be considered locked.
     */
    lockStatus?: GoogleAppsDriveLabelsV2LockStatus;
    /**
     * Output only. Resource name of the label. Will be in the form of either: `labels/{id}` or `labels/{id}@{revision_id}` depending on the request. See `id` and `revision_id` below.
     */
    name?: string;
    /**
     * Basic properties of the label.
     */
    properties?: GoogleAppsDriveLabelsV2LabelProperties;
    /**
     * Output only. The time this label was published. This value has no meaning when the label is not published.
     */
    publishTime?: string;
    /**
     * Information about a user.
     */
    publisher?: GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. The time this label revision was created.
     */
    revisionCreateTime?: string;
    /**
     * Information about a user.
     */
    revisionCreator?: GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Output only. Revision ID of the label. Revision ID might be part of the label `name` depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: `([a-zA-Z0-9])+`
     */
    revisionId?: string;
    /**
     * The capabilities related to this label when editing the label.
     */
    schemaCapabilities?: GoogleAppsDriveLabelsV2LabelSchemaCapabilities;
}
/**
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
 */
export declare class GoogleAppsDriveLabelsV2LabelInput extends SpeakeasyBase {
    /**
     * The capabilities a user has on this label's applied metadata.
     */
    appliedCapabilities?: GoogleAppsDriveLabelsV2LabelAppliedCapabilities;
    /**
     * Behavior of this label when it's applied to Drive items.
     */
    appliedLabelPolicy?: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy;
    /**
     * Information about a user.
     */
    creator?: GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Information about a user.
     */
    disabler?: GoogleAppsDriveLabelsV2UserInfo;
    /**
     * UI display hints for rendering the label.
     */
    displayHints?: GoogleAppsDriveLabelsV2LabelDisplayHints;
    /**
     * List of fields in descending priority order.
     */
    fields?: GoogleAppsDriveLabelsV2FieldInput[];
    /**
     * Required. The type of label.
     */
    labelType?: GoogleAppsDriveLabelsV2LabelLabelTypeEnum;
    /**
     * Custom URL to present to users to allow them to learn more about this label and how it should be used.
     */
    learnMoreUri?: string;
    /**
     * The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
     */
    lifecycle?: GoogleAppsDriveLabelsV2LifecycleInput;
    /**
     * Basic properties of the label.
     */
    properties?: GoogleAppsDriveLabelsV2LabelProperties;
    /**
     * Information about a user.
     */
    publisher?: GoogleAppsDriveLabelsV2UserInfo;
    /**
     * Information about a user.
     */
    revisionCreator?: GoogleAppsDriveLabelsV2UserInfo;
    /**
     * The capabilities related to this label when editing the label.
     */
    schemaCapabilities?: GoogleAppsDriveLabelsV2LabelSchemaCapabilities;
}
