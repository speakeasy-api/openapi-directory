import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.
 */
export declare class GooglePrivacyDlpV2QuasiIdentifierField extends SpeakeasyBase {
    /**
     * A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below).
     */
    customTag?: string;
    /**
     * General identifier of a data field in a storage service.
     */
    field?: GooglePrivacyDlpV2FieldId;
}
