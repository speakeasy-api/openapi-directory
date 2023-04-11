import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaField, GoogleAppsDriveLabelsV2betaFieldInput } from "./googleappsdrivelabelsv2betafield";
import { GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities } from "./googleappsdrivelabelsv2betalabelappliedcapabilities";
import { GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy } from "./googleappsdrivelabelsv2betalabelappliedlabelpolicy";
import { GoogleAppsDriveLabelsV2betaLabelDisplayHints } from "./googleappsdrivelabelsv2betalabeldisplayhints";
import { GoogleAppsDriveLabelsV2betaLabelProperties } from "./googleappsdrivelabelsv2betalabelproperties";
import { GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities } from "./googleappsdrivelabelsv2betalabelschemacapabilities";
import { GoogleAppsDriveLabelsV2betaLifecycle, GoogleAppsDriveLabelsV2betaLifecycleInput } from "./googleappsdrivelabelsv2betalifecycle";
import { GoogleAppsDriveLabelsV2betaLockStatus } from "./googleappsdrivelabelsv2betalockstatus";
import { GoogleAppsDriveLabelsV2betaUserInfo } from "./googleappsdrivelabelsv2betauserinfo";
/**
 * Required. The type of label.
 */
export declare enum GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum {
    LabelTypeUnspecified = "LABEL_TYPE_UNSPECIFIED",
    Shared = "SHARED",
    Admin = "ADMIN"
}
/**
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
 */
export declare class GoogleAppsDriveLabelsV2betaLabel extends SpeakeasyBase {
    /**
     * The capabilities a user has on this label's applied metadata.
     */
    appliedCapabilities?: GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities;
    /**
     * Behavior of this label when it's applied to Drive items.
     */
    appliedLabelPolicy?: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy;
    /**
     * Output only. The time this label was created.
     */
    createTime?: string;
    /**
     * Information about a user.
     */
    creator?: GoogleAppsDriveLabelsV2betaUserInfo;
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
    disabler?: GoogleAppsDriveLabelsV2betaUserInfo;
    /**
     * UI display hints for rendering the label.
     */
    displayHints?: GoogleAppsDriveLabelsV2betaLabelDisplayHints;
    /**
     * List of fields in descending priority order.
     */
    fields?: GoogleAppsDriveLabelsV2betaField[];
    /**
     * Output only. Globally unique identifier of this label. ID makes up part of the label `name`, but unlike `name`, ID is consistent between revisions. Matches the regex: `([a-zA-Z0-9])+`
     */
    id?: string;
    /**
     * Required. The type of label.
     */
    labelType?: GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum;
    /**
     * Custom URL to present to users to allow them to learn more about this label and how it should be used.
     */
    learnMoreUri?: string;
    /**
     * The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
     */
    lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;
    /**
     * Contains information about whether a label component should be considered locked.
     */
    lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;
    /**
     * Output only. Resource name of the label. Will be in the form of either: `labels/{id}` or `labels/{id}@{revision_id}` depending on the request. See `id` and `revision_id` below.
     */
    name?: string;
    /**
     * Basic properties of the label.
     */
    properties?: GoogleAppsDriveLabelsV2betaLabelProperties;
    /**
     * Output only. The time this label was published. This value has no meaning when the label is not published.
     */
    publishTime?: string;
    /**
     * Information about a user.
     */
    publisher?: GoogleAppsDriveLabelsV2betaUserInfo;
    /**
     * Output only. The time this label revision was created.
     */
    revisionCreateTime?: string;
    /**
     * Information about a user.
     */
    revisionCreator?: GoogleAppsDriveLabelsV2betaUserInfo;
    /**
     * Output only. Revision ID of the label. Revision ID might be part of the label `name` depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: `([a-zA-Z0-9])+`
     */
    revisionId?: string;
    /**
     * The capabilities related to this label when editing the label.
     */
    schemaCapabilities?: GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities;
}
/**
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
 */
export declare class GoogleAppsDriveLabelsV2betaLabelInput extends SpeakeasyBase {
    /**
     * The capabilities a user has on this label's applied metadata.
     */
    appliedCapabilities?: GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities;
    /**
     * Behavior of this label when it's applied to Drive items.
     */
    appliedLabelPolicy?: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy;
    /**
     * Information about a user.
     */
    creator?: GoogleAppsDriveLabelsV2betaUserInfo;
    /**
     * Information about a user.
     */
    disabler?: GoogleAppsDriveLabelsV2betaUserInfo;
    /**
     * UI display hints for rendering the label.
     */
    displayHints?: GoogleAppsDriveLabelsV2betaLabelDisplayHints;
    /**
     * List of fields in descending priority order.
     */
    fields?: GoogleAppsDriveLabelsV2betaFieldInput[];
    /**
     * Required. The type of label.
     */
    labelType?: GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum;
    /**
     * Custom URL to present to users to allow them to learn more about this label and how it should be used.
     */
    learnMoreUri?: string;
    /**
     * The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.
     */
    lifecycle?: GoogleAppsDriveLabelsV2betaLifecycleInput;
    /**
     * Basic properties of the label.
     */
    properties?: GoogleAppsDriveLabelsV2betaLabelProperties;
    /**
     * Information about a user.
     */
    publisher?: GoogleAppsDriveLabelsV2betaUserInfo;
    /**
     * Information about a user.
     */
    revisionCreator?: GoogleAppsDriveLabelsV2betaUserInfo;
    /**
     * The capabilities related to this label when editing the label.
     */
    schemaCapabilities?: GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities;
}
