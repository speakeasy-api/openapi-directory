import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2InfoTypeTransformations } from "./googleprivacydlpv2infotypetransformations";
import { GooglePrivacyDlpV2PrimitiveTransformation } from "./googleprivacydlpv2primitivetransformation";
import { GooglePrivacyDlpV2RecordCondition } from "./googleprivacydlpv2recordcondition";
/**
 * The transformation to apply to the field.
 */
export declare class GooglePrivacyDlpV2FieldTransformation extends SpeakeasyBase {
    /**
     * A condition for determining whether a transformation should be applied to a field.
     */
    condition?: GooglePrivacyDlpV2RecordCondition;
    /**
     * Required. Input field(s) to apply the transformation to. When you have columns that reference their position within a list, omit the index from the FieldId. FieldId name matching ignores the index. For example, instead of "contact.nums[0].type", use "contact.nums.type".
     */
    fields?: GooglePrivacyDlpV2FieldId[];
    /**
     * A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.
     */
    infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;
    /**
     * A rule for transforming a value.
     */
    primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
}
