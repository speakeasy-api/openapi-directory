import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides special notice messages related to a particular value in a field that is part of a PolicySchema.
 */
export declare class GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription extends SpeakeasyBase {
    /**
     * Output only. Whether the user needs to acknowledge the notice message before the value can be set.
     */
    acknowledgementRequired?: boolean;
    /**
     * Output only. The field name associated with the notice.
     */
    field?: string;
    /**
     * Output only. The notice message associate with the value of the field.
     */
    noticeMessage?: string;
    /**
     * Output only. The value of the field that has a notice. When setting the field to this value, the user may be required to acknowledge the notice message in order for the value to be set.
     */
    noticeValue?: string;
}
